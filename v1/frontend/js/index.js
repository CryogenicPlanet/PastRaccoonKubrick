/**
 * Just dummy data to play with
 */
const dummyData = {
  reviews: [
    { description: "Dummy review", rating: 2 },
    { description: "Awesome", rating: 5 },
    { description: "Ok", rating: 1 },
  ],
};

//  Not sure how to do env variables in vanilla javascript so variables here is hard coded
const SERVER_PATH = "https://gumroad-challenge-v1-version-1.up.railway.app";

//  Constant tailwind classes
const FILLED_STAR_CLASS = "text-gray-900";
const UNFILLED_STAR_CLASS = "text-gray-200";

/**
 * On the first load of the index page we need to fetch some data and then populate it
 *
 * The data we need is
 *
 * 1. Total number of reviews
 * 2. Total rating
 * 3. An array of reviews which contain {description: string, rating: number}
 *
 * We need to populate the following element ids with the data:
 * 1. #noOfReviews - Total number of reviews
 * 2. #totalRatingContainer - Total rating
 * For the total rating specifically we need to draw the number of filled and unfilled star depending on the rating out of 5
 *
 * Finally we need to create n element, and add them to #reviewContainer where N is number of reviews
 */
const onStartup = async () => {
  try {
    console.log("Making request", `${SERVER_PATH}/reviews/getAll`);
    const { data } = await axios.get(`${SERVER_PATH}/reviews/getAll`);

    // GET REQUEST
    const { reviews } = data;

    console.log(reviews);

    const noOfReviews = reviews.length;

    const filledStars = Math.round(
      reviews.reduce((totalRating, { rating }) => totalRating + rating, 0) /
        noOfReviews
    );

    console.log({ noOfReviews, filledStars });

    document.getElementById("noOfReviews").innerHTML = `${noOfReviews} reviews`;

    //  Copies this element as template so we can mutate it without breaking the view
    const totalRatingContainer = document.getElementById(
      "totalRatingContainer"
    );

    // Removes existing rating
    // This allows us to submit reviews and see new reload without having to reload page
    while (totalRatingContainer.firstChild) {
      totalRatingContainer.firstChild.remove();
    }

    const starTemplate = document
      .getElementById("starTemplate")
      .cloneNode(true);

    const unfilledStars = 5 - filledStars;

    for (let i = 0; i < filledStars; i++) {
      const filledStar = starTemplate.cloneNode(true);
      filledStar.style.display = "block";
      filledStar.classList.add(FILLED_STAR_CLASS);

      totalRatingContainer.appendChild(filledStar);
    }

    for (let i = 0; i < unfilledStars; i++) {
      const unfilledStar = starTemplate.cloneNode(true);
      unfilledStar.style.display = "block";
      unfilledStar.classList.remove(FILLED_STAR_CLASS);
      unfilledStar.classList.add(UNFILLED_STAR_CLASS);

      totalRatingContainer.appendChild(unfilledStar);
    }

    const reviewsContainer = document.getElementById("reviewsContainer");

    while (reviewsContainer.firstChild) {
      reviewsContainer.firstChild.remove();
    }

    const reviewTemplate = document
      .getElementById("reviewTemplate")
      .cloneNode(true);

    /**
     * Create review node from the template review node
     *
     * It then adds the stars and the text, then appends it to child
     *
     * This is still O(n) as the inner for loops are all constant loops of length < 5
     */
    for (const review of reviews) {
      const reviewNode = reviewTemplate.cloneNode(true);
      reviewNode.style.display = "flex";

      let starContainer = null;
      let textContainer = null;
      // We know exactly that the template has only 5 nodes
      // Therefore this loop is not exponential in nature
      for (const child of reviewNode.childNodes) {
        if (child.id === "starContainer") {
          starContainer = child;
        } else if (child.id === "textContainer") {
          textContainer = child;
        }
      }
      if (!starContainer || !textContainer) {
        console.error("Could not find starContainer in reviewTemplate");
      }
      const filledStars = review.rating;
      const unfilledStars = 5 - filledStars;

      for (let i = 0; i < filledStars; i++) {
        const filledStar = starTemplate.cloneNode(true);
        filledStar.style.display = "block";
        filledStar.classList.add(FILLED_STAR_CLASS);

        starContainer.appendChild(filledStar);
      }

      for (let i = 0; i < unfilledStars; i++) {
        const unfilledStar = starTemplate.cloneNode(true);
        unfilledStar.style.display = "block";
        unfilledStar.classList.remove(FILLED_STAR_CLASS);
        unfilledStar.classList.add(UNFILLED_STAR_CLASS);

        starContainer.appendChild(unfilledStar);
      }

      textContainer.innerText = review.description;

      reviewsContainer.appendChild(reviewNode);
    }
  } catch (err) {
    console.error(err);
  }
};

onStartup();

let submitRating = 0;

/**
 * Will update submitRating
 * @param {number} index Index of rating
 */
const handleRatingClick = (index) => {
  submitRating = index;
  const filledStars = submitRating;

  // The plus one is here cause the ids are index from 1 and not 0
  for (let i = 1; i < filledStars + 1; i++) {
    const filledStar = document.getElementById(`submitRating-${i}`);
    filledStar.classList.remove(UNFILLED_STAR_CLASS);
    filledStar.classList.add(FILLED_STAR_CLASS);
  }

  for (let i = filledStars + 1; i < 6; i++) {
    const unfilledStar = document.getElementById(`submitRating-${i}`);
    unfilledStar.classList.remove(FILLED_STAR_CLASS);
    unfilledStar.classList.add(UNFILLED_STAR_CLASS);
  }

  console.log("Submit rating", submitRating);
};

// Handles review submission
const handleReviewSubmit = async () => {
  const rating = submitRating;
  const description = document.getElementById("reviewBody").value;

  // POST REQUEST

  await axios.post(`${SERVER_PATH}/reviews/add`, {
    review: { rating, description: description },
  });

  document.getElementById("reviewBody").value = "";

  onStartup();
};
