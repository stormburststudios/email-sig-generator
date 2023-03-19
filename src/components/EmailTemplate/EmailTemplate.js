export const EmailTemplate = ({
        picture = 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        forename = 'John',
        surname = 'Doe',
        email = 'john.doe@oneupsales.co.uk',
        position = 'Head of Doe',
        linkedIn = 'https://linkedin.com',
        mobile = '3308 08 3310',
    }) => {
        const fallback = (str, fallback) => str === null ? fallback : str.length === 0 ? fallback : str;
        return (
            <div className="template">
                <table cellPadding={0} cellSpacing={0}
                       style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                    <tbody>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>
                            <table cellPadding={0} cellSpacing={0}
                                   style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                                <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <img width={110} style={{
                                            width: '110px',
                                            height: '110px',
                                            display: 'block',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                        }}
                                             src={fallback(picture, 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')}
                                             className="CToWUd" data-bit="iit"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td width={30}>
                            <div/>
                        </td>
                        <td style={{ padding: '0px', verticalAlign: 'middle' }}>
                            <h3 color="#000000" style={{
                                color: 'rgb(0, 0, 0)',
                                fontFamily: 'Verdana',
                                margin: '0px',
                                fontSize: '18px',
                            }}>{fallback(forename, 'John')} {fallback(surname, 'Doe')}</h3>
                            <p color="#000000" style={{
                                color: 'rgb(0, 0, 0)',
                                fontFamily: 'Verdana',
                                margin: '0px',
                                fontSize: '14px',
                                lineHeight: '22px',
                                opacity: '0.8',
                            }}>{fallback(position, 'Head of Doe')}</p>
                            <img width={110} style={{ maxWidth: '110px', display: 'block', marginTop: '10px' }}
                                 src="https://ci3.googleusercontent.com/mail-sig/AIorK4yNXlLuKoIapFdlTYvFLVvXH2fc37nvaLwrBZnOAAxum0fjnydP8cIqSbcYx2OU1GHyT3DYZCU"
                                 className="CToWUd" data-bit="iit"/>
                            <table cellPadding={0} cellSpacing={0} style={{
                                fontFamily: 'Verdana',
                                verticalAlign: '-webkit-baseline-middle',
                                width: '221px',
                            }}>
                                <tbody>
                                <tr>
                                    <td height={15}/>
                                </tr>
                                <tr>
                                    <td color="#2489FD" height={1} style={{
                                        width: '221px',
                                        borderBottom: '2px solid #2489fd',
                                        borderLeft: 'none',
                                        display: 'block',
                                    }}/>
                                </tr>
                                <tr>
                                    <td height={15}/>
                                </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0}
                                   style={{ fontFamily: 'Verdana', verticalAlign: '-webkit-baseline-middle' }}>
                                <tbody>
                                <tr height={25} style={{ verticalAlign: 'middle' }}>
                                    <td width={30} style={{ verticalAlign: 'middle' }}>
                                        <table cellPadding={0} cellSpacing={0}
                                               style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                                    <span color="#F2547D" width={11} style={{ display: 'block' }}><img
                                                        src="https://i.ibb.co/T8RhHWh/phone-solid.png" width={13}
                                                        style={{ display: 'block' }} className="CToWUd"
                                                        data-bit="iit"/></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}>
                                        <a href={`tel:${fallback(mobile, '330 80 83310')}`}
                                           color="#000000" style={{
                                               color: 'rgb(0, 0, 0)',
                                            fontSize: '12px',
                                            textDecoration: 'none',
                                        }} target="_blank" rel="noreferrer">
                                            +44 {fallback(mobile, '330 80 83310')}
                                        </a>
                                    </td>
                                </tr>
                                <tr height={25} style={{ verticalAlign: 'middle' }}>
                                    <td width={30} style={{ verticalAlign: 'middle' }}>
                                        <table cellPadding={0} cellSpacing={0}
                                               style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                  <span color="#F2547D" width={11} style={{ display: 'block' }}>
                                    <img src="https://i.ibb.co/k07jLSm/envelope-solid.png" color="#F2547D" width={13}
                                         style={{ display: 'block' }} className="CToWUd" data-bit="iit"/>
                                  </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{ padding: '0px' }}>
                                        <a href={`mailto:${fallback(email, 'john.doe@example.com')}`} color="#000000"
                                           style={{ color: 'rgb(0, 0, 0)', fontSize: '12px', textDecoration: 'none' }}
                                           target="_blank" rel="noreferrer">
                                            <span className="il" style={{}}>{fallback(email, 'john.doe@example.com')}</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr height={25} style={{ verticalAlign: 'middle' }}>
                                    <td width={30} style={{ verticalAlign: 'middle' }}>
                                        <table cellPadding={0} cellSpacing={0}
                                               style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                  <span color="#F2547D" width="15px" style={{ display: 'block', width: '11px' }}>
                                    <img src="https://i.ibb.co/StF13TY/globe-solid.png" color="#F2547D" width={13}
                                         style={{ display: 'block' }} className="CToWUd" data-bit="iit"/>
                                  </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{ padding: '0px' }}>
                                        <a href="https://www.oneupsales.co.uk/" color="#000000"
                                           style={{ color: 'rgb(0, 0, 0)', fontSize: '12px', textDecoration: 'none' }}
                                           target="_blank"
                                           data-saferedirecturl="https://www.google.com/url?q=https://www.oneupsales.co.uk/&source=gmail&ust=1676503559876000&usg=AOvVaw1mMgFIw9EyN1A6fkJepWaw" rel="noreferrer">
                                            https://www.oneupsales.co.uk/
                                        </a>
                                    </td>
                                </tr>
                                <tr height={25} style={{ verticalAlign: 'middle' }}>
                                    <td width={30} style={{ verticalAlign: 'middle' }}>
                                        <table cellPadding={0} cellSpacing={0}
                                               style={{ verticalAlign: '-webkit-baseline-middle', fontFamily: 'Verdana' }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: 'bottom' }}>
                                  <span color="#F2547D" width="15px" style={{ display: 'block', width: '11px' }}>
                                    <img src="https://i.ibb.co/H4bxv79/linkedin.png" color="#F2547D" width={13}
                                         style={{ display: 'block' }} className="CToWUd" data-bit="iit"/>
                                  </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{ padding: '0px' }}>
                                        <a href={fallback(linkedIn, 'https://linkedin.com')} color="#000000"
                                           style={{ color: 'rgb(0, 0, 0)', fontSize: '12px', textDecoration: 'none' }}
                                           target="_blank"
                                           rel="noreferrer">
                                            Connect with me on LinkedIn
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0}
                                   style={{ fontFamily: 'Verdana', verticalAlign: '-webkit-baseline-middle' }}>
                                <tbody>
                                <tr>
                                    <td height={20}/>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <table cellPadding={0} cellSpacing={0}
                                   style={{ fontFamily: 'Verdana', verticalAlign: '-webkit-baseline-middle' }}>
                                <tbody>
                                <tr/>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
;
