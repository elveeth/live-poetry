import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                
                            </li>
                            <li>
                                
                            </li>
                            <li>
                                
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='https://www.instagram.com/loguev/'
                            target='blank'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/logan.veith.31/'
                            target='blank'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='https://twitter.com/logan_veith'
                            target='blank'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+15034329947'
                        >
                            <i className='fa fa-phone' /> 1.503.432.9947
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:logan.veith@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> logan.veith@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;