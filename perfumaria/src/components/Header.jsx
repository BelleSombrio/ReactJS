import React from 'react'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <header>
        <div className="logo ">
            <p className='btn-grad'>ada's</p>
        </div>
        <nav className="itens">
           <ul>
                <li>
                    <a href="/">home</a>
                </li>

                <li>
                    <a href="/produtos">perfumes</a>
                </li>

                <li>
                    <a href="/sobre">about</a>
                </li>              
           </ul>
        </nav>
    </header>
  )
}
