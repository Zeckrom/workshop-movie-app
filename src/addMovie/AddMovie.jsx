import React, {Component} from 'react'

import './addMovie.scss'

class AddMovie extends Component{
    state={
        title:'',
        image:'',
        year: 0,
        rating: 0,
    }

     handleTitleChange = (title) => {
         this.setState({
             title
         })
     }

     handleYearChange = (year) => {
        this.setState({
            year
        })
    }

    handleImageChange = (image) => {
        this.setState({
            image
        })
    }

    handleRatingChange = (rating) => {
        this.setState({
            rating
        })
    }

    cleanInputs = () => {
        this.setState({
            title:'',
            image:'',
            year:0,
            rating: 0,
        })
    }

    render(){
        const {
            addMovie
        } = this.props
        const {title, image, year, rating} = this.state
        return(
            <div className="add-movie">
                <input value={title} onChange={(e) => this.handleTitleChange(e.target.value)} type="text" placeholder="title"/>
                <input value={image} onChange={(e) => this.handleImageChange(e.target.value)} type="text" placeholder="image"/>
                <input value={year} onChange={(e) => this.handleYearChange(e.target.value)} type="number" placeholder="year"/>
                <input value={rating} onChange={(e) => this.handleRatingChange(e.target.value)} type="number" placeholder="rating"/>
                <button
                    onClick={() => {
                        addMovie({
                            title,
                            image,
                            rating,
                            releaseDate: year,
                        })
                        this.cleanInputs()
                    }}
                    type="button">
                    add
                </button>
            </div>
        )
    }
}

export default AddMovie