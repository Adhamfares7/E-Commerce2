import React from 'react'

export default function Cart() {
  return (
    <div className=' py-44 container'>
      

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-white">
        <thead class="text-xs text-white uppercase bg-red-500 ">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-tl-2xl">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-tr-2xl">
                    Price
                </th>
            </tr>
        </thead>
        <tbody className=' bg-red-600    '>
            <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6  py-4">
                    $2999
                </td>
            </tr>
            <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                   1
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot className='bg-red-700'>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base rounded-bl-xl">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3 rounded-br-xl">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>

    </div>
  )
}
