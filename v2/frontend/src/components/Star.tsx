import React from 'react'

const Star = ({
  checked,
  halfStar
}: {
  checked?: boolean
  halfStar?: boolean
}) => {
  if (halfStar) {
    // So this is where the trick exists to make the half stars work
    // The outer dive has a maxWidth of 10px and overflow hidden, and we keep changing the overflow direction
    // The width of the svg itself is 20px so we get a nice half star
    // This is also recursively using itself so we can keep a consistent looking star
    return (
      <div className="flex items-center">
        <div
          className="overflow-hidden inline-block w-[10px]"
          style={{ direction: 'ltr' }}>
          <Star checked={true}></Star>
        </div>
        <div
          className="overflow-hidden inline-block w-[10px]"
          style={{ direction: 'rtl' }}>
          <Star checked={false}></Star>
        </div>
      </div>
    )
  }
  return (
    <svg
      className={`${
        checked ? 'text-gray-900' : 'text-gray-200'
      }  h-5 w-5 flex-shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default Star
