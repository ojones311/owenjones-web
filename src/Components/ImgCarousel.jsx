import React,{Component} from 'react'
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// import projectList from '../projects'

class ImgCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            slides: []
        }
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
            images.push(<img src={elem}></img>)
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