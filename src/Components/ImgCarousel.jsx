import React,{Component} from 'react'
import Carousel, {Dots, autoplayPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../Styles/ProjectPage.css'

class ImgCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            slides: []
        }
        this.onChange = this.onChange.bind(this)
    }


    componentDidMount = () => {
        this.displayProjectImages()
    }

    onChange = (value) => {
        this.setState({
            value: value
        })
    }

    displayProjectImages = () => {
        let images = []
        this.props.project.images.forEach(elem => {
            images.push(<img id='carousel-img' src={elem} alt={elem.name}></img>)
        })
        this.setState({
            slides: images
        })
    }
   
    render(){
        return(
            <div className='image-carousel'>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onChange}
                    animationSpeed={1500}
                />
                <Dots value={this.state.value}
                 onChange={this.onChange} 
                 number={this.state.slides.length}
                 />
            </div>
        )
    }
}


export default ImgCarousel