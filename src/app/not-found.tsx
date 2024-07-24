// 'use client' 87.2kb si usa use client o no

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='grid min-h-screen place-content-center text-center'>
      <h1>No se encontró - 404</h1>
      <div>
        <Link href="/">Regresar a araceliponce.github.io</Link>
      </div>
    </div>
  )
}