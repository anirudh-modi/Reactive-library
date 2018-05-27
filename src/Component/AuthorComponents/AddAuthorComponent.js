/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import {dispatchAddAuthor} from '../../Action/actions';


export default class AddAuthorComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            'selectedGender':'',
            'authorName':'',
            'country':'',
            "age":'',
            'about':''
        };

        this.saveAuthor = this.saveAuthor.bind(this);
    }

    handleChange = ({target}) =>
    {
        let id =  target.id;

        let newState = {};

        newState[id] = target.value;

        this.setState(newState);
    };

    saveAuthor = () =>
    {
        let {authorName, selectedGender, country, age, about} = this.state;

        let author = {
            'authorName':authorName,
            'gender':selectedGender,
            'country':country,
            'age':parseInt(age),
            'about':about
        };

        if(authorName && selectedGender && country && age)
        {
            this.props.store.dispatch(dispatchAddAuthor(author));

            this.props.closePopUp();
        }
        else
        {
            alert('Fill the details');
        }
    };

    render()
    {
        let {selectedGender, authorName, age, dob, about} = this.state;
        return (
            <span>
                <div>
                    <input required id='authorName' type="text" value={authorName} onChange={this.handleChange} placeholder="Author Name" className="textInput" />
                </div>
                <div className="containeForInputAndSelect">
                    <input required value={age} type="number" placeholder="Age" className='textInput width175' onChange={this.handleChange} id="age" />
                    <select id="selectedGender" value={selectedGender} className='selectTag' onChange={this.handleChange}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <input required type="text" onChange={this.handleChange} placeholder="Born in (Place)" className="textInput" id="country" value={dob} />
                </div>
                <div>
                    <textarea onChange={this.handleChange} placeholder="About Author" className="textArea textInput" value={about} id="about"></textarea>
                </div>
                <div className="bottomDiv">
                    <button className="marginRight10" onClick={this.props.closePopUp}>Cancel</button>
                    <button className="saveButton marginLeft10" onClick={this.saveAuthor}>Save Author</button>
                </div>
            </span>
        )
    }
}