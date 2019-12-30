import React from 'react'
import './Footer.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MdCall, MdPlace } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    const contentFullData = useStaticQuery(graphql`
    query{
        allContentfulFooter {
            edges {
              node {
                helpLine {
                  helpline {
                    name
                    phone
                  }
                }
                headOffices {
                  heading
                  locations {
                    address
                    name
                    phone
                  }
                }
                offices {
                  office {
                    address
                    name
                    phone
                  }
                }
              }
            }
          }
}
`)

    let fieldoffices = contentFullData.allContentfulFooter.edges[0].node.offices.office
    let headOffices = contentFullData.allContentfulFooter.edges[0].node.headOffices
    let helpline = contentFullData.allContentfulFooter.edges[0].node.helpLine.helpline

    console.log(headOffices)
    console.log(helpline)
    return (


        <div class="_container">
            <div class="div _div-1">
                <span className="footer_headings">Navigation</span>
                <div className="navigation_box">
                    <span><Link className="link" to='/home/'>Home</Link></span>
                    <span><Link className="link" to='/home/'>Apply</Link></span>
                    <span><Link className="link" to='/home/'>How it works</Link></span>
                    <span><Link className="link" to='/home/'>Artificial Inteligence</Link></span>
                    <span><Link className="link" to='/home/'>Cloud Native and Mobile Web Computing</Link></span>
                    <span><Link className="link" to='/home/'>Blockchain</Link></span>
                    <span><Link className="link" to='/home/'>Internet of Things and AI</Link></span>
                    <span><Link className="link" to='/home/'>About The President</Link></span>
                    <span><Link className="link" to='/home/'>Management Committee</Link></span>
                    <span><Link className="link" to='/home/'>Women Inclusion in Technology (WIT)</Link></span>
                </div>
            </div>

            <div class="div _div-2">
                <span className="footer_headings">{headOffices.heading}</span>
                {/* Here is fetched data of all Headquarterz */}
                {
                    headOffices.locations ?
                        headOffices.locations.map((v, i) => {
                            return <div>
                                <span className="footer_headings">{v.name}</span>
                                <div className="address_box">
                                    <span style={{ display: 'inline' }}> <MdPlace size={20} color='#05d88c' /></span>
                                    <span className="detail_text" style={{ display: 'inline' }} >{v.address}</span><br />
                                    <MdCall display='inline' size={20} color='#05d88c' />
                                    <span className="detail_text" style={{ display: 'inline' }}>{v.phone}</span>
                                </div>
                            </div>
                        })
                        :
                        <div></div>
                }
                {/* Here is fetched data of all Help Lines */}
                {
                    helpline ?
                        helpline.map((v, i) => {
                            return <div>
                                <span className="footer_headings">{v.name}</span>
                                <MdCall display='inline' size={20} color='#05d88c' />
                                <span className="detail_text" style={{ display: 'inline' }}>{v.phone}</span>
                            </div>
                        })
                        :
                        <div></div>
                }
                <span className="footer_headings">Connect with us</span>
                <span style={{ display: 'inline' }}><IoLogoFacebook size={30} color='#05d88c' /></span>
                <span style={{ display: 'inline' }}><FaYoutube size={30} color='#05d88c' /></span>
            </div>

            <div class="div _div-3">

                {/* here is fetched data of all field offices */}
                {
                    fieldoffices ?
                        fieldoffices.map((v, i) => {
                            return <div>
                                <span className="footer_headings">{v.name}</span>
                                <div className="address_box">
                                    <span style={{ display: 'inline' }}><MdPlace size={20} color='#05d88c' /></span>
                                    <span className="detail_text" style={{ display: 'inline' }} >{v.address}</span><br />
                                    <MdCall display='inline' size={20} color='#05d88c' />
                                    <span className="detail_text" style={{ display: 'inline' }}>{v.phone}</span>
                                </div>
                            </div>
                        })
                        :
                        <div></div>
                }
            </div>

        </div>

    )
}

export default Footer