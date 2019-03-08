import React, { Component } from 'react'

class AddPoll extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    }

    handleInputChange = e => {
        const { value, name } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }

    isDisabled = () => {
        let { question, a, b, c, d}  = this.state

        return question = ''
         || a === ''
         || b === ''
         || c === ''
         || d === ''
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('Add Poll', this.state)
    }

    render() {
        const { question, a, b, c, d} = this.state
        const { handleInputChange, isDisabled, handleSubmit } = this

        return (
            <form className='add-form' onSubmit={handleSubmit}>
                <h3 style={{marginBottom: 5}}>What is your question?</h3>
                <input
                    value={question}
                    onChange={handleInputChange}
                    name='question'
                    className='input'
                    type='text'
                />
                <h3>What are your options?</h3>
                <label className='label' htmlFor='a'>A</label>
                <input 
                    value={a}
                    onChange={handleInputChange}
                    name='a'
                    className='input'
                    id='a'
                    type='text'
                />
                <label className='label' htmlFor='b'>B</label>
                <input 
                    value={b}
                    onChange={handleInputChange}
                    name='b'
                    className='input'
                    id='b'
                    type='text'
                />
                <label className='label' htmlFor='c'>C</label>
                <input 
                    value={c}
                    onChange={handleInputChange}
                    name='c'
                    className='input'
                    id='c'
                    type='text'
                />
                <label className='label' htmlFor='d'>D</label>
                <input 
                    value={d}
                    onChange={handleInputChange}
                    name='d'
                    className='input'
                    id='d'
                    type='text'
                />
                <button className='btn' type='submit' disabled={isDisabled()}>
                    Submit
                </button>
            </form>
        )
    }
}

export default AddPoll