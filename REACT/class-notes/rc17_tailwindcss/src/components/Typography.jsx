import React from 'react'

const Typography = () => {
  return (
    <div>
      {/* //! Typography */}
      <p className="text-sm"> Typography </p>
      <p className="text-md"> Typography </p>
      <p className="text-lg"> Typography </p>
      <p className="text-xl"> Typography </p>
      <p className="text-2xl"> Typography </p>
      <br />
      {/* //* Spesifik değer verme | [] */}
      <p className="text-[2rem]">Spesifik Typography</p>
      <br />
      {/* //* Line Clamp */}
      <article>
        <p className='line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi inventore maxime id ducimus odio at aliquam. Iure corporis atque culpa quam? Provident, ea magni magnam incidunt minima et ducimus!
            Dolores reprehenderit soluta fuga error ea at sit facere commodi praesentium molestias repellendus aperiam distinctio, repellat architecto ducimus autem repudiandae libero animi? Pariatur dolorem voluptatibus omnis optio, vitae consequuntur odit!
            Quisquam eaque doloribus nesciunt voluptate sequi quidem beatae dolore non ratione expedita nam optio, totam, harum dignissimos. Minima rerum, voluptatum, et natus expedita doloremque asperiores non tempore veniam tenetur illum.
            Deserunt nesciunt consequatur aut, blanditiis aspernatur temporibus libero, officia repellat in quisquam, alias odit quis et tenetur totam exercitationem. Inventore quam quasi repellat sint, obcaecati veritatis cum laboriosam consectetur rerum?
            Libero maiores animi molestias dicta quasi sequi voluptatibus et totam quisquam commodi ducimus voluptas, ea eveniet maxime pariatur nihil laboriosam quis omnis dignissimos exercitationem doloremque nostrum enim. Ex, expedita esse!
        </p>
      </article>
      <br />
      {/* //* Font özellikleri */}
      <div>
        <p className="font-bold">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="text-blue-700">Merhaba</p>
        <p className="text-[rgb(239,231,0)]">Merhaba</p>
        <p className="bg-slate-500">Merhaba</p>
      </div>
    </div>
  )
}

export default Typography
