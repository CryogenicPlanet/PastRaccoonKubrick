import React from 'react'
import { Toaster } from 'react-hot-toast'

import { NewReview } from './components/NewReview'
import { Reviews } from './components/Reviews'
import TotalReviews from './components/TotalReviews'

function App() {
  return (
    <>
      <Toaster position="top-right"></Toaster>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="Two each of gray, white, and black shirts laying flat."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                  alt="Model wearing plain black basic tee."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                  alt="Model wearing plain gray basic tee."
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                alt="Model wearing plain white basic tee."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Basic Tee 6-Pack
              </h1>
            </div>
            <NewReview />

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 ">
              {/* Reviews */}
              <div className="mt-2">
                <h3 className="sr-only">Reviews</h3>
                <TotalReviews></TotalReviews>
              </div>
              <div className="py-10 w-full flex flex-col justify-center items-start">
                <p className="text-xl font-bold">Reviews</p>
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
