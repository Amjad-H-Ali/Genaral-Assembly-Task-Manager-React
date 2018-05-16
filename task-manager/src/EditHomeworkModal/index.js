import React, {Component} from 'react';
import './style.css'

// Changed to a class --> because we can't actually type in our input
// This is because props are immutable
class EditHomeworkModal extends Component {
	// can pass props into your constructor
	constructor (){
		super();

		this.state = {
			name: '',
			link: '',
			notes: ''
		}
	}

	componentWillReceiveProps(nextProps){

		console.log(nextProps.editedAssignment, 'this is editedAssignment in compenent will Receive Props')

		if (nextProps.editedAssignment === ''){
			console.log(nextProps.editedAssignment, typeof nextProps.editedAssignment)
		} else {
			this.setState({
				name: nextProps.editedAssignment.name,
				link: nextProps.editedAssignment.link,
				notes: nextProps.editedAssignment.notes
			})
		}
	}

	updateName = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	updateLink = e => {
		const link = e.currentTarget.value;
		this.setState({link: link})
	}

	updateNotes = e => {
		const notes = e.currentTarget.value;
		this.setState({notes: notes})
	}

	handleSubmit = (editItem) => {

		console.log('handle submit clicked')

		this.props.editAssignment(this.state.name, this.state.link, this.state.notes)
		
	}


	render () {

		const cssClass = this.props.showEdit ? 'modal' : 'modalNone'
		console.log('is this being called on create for some reason', this.state)
		return (
			<div className={cssClass}>
				<div className="modal-content">
					<span onClick={this.props.closeEditModal} className="close">&times;</span>
					<div id='newHead'> EDIT ASSIGNMENT </div>				
					<div id='editContent'>
						<div className='editItem'>
							<label htmlFor="name">Name</label>
							<br/>
							<input className='editInput' id="name" type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='link'>Link</label>
							<br/>				
							<input className='editInput' id="link" type='text' value={this.state.link} placeholder='Github Link' onChange={this.updateLink}/><br/>
						</div>
						<div className='editItem'>
							<label htmlFor='notes'>Notes</label>	
							<br/>
							<textarea className='notesInput' id="notes" type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}> </textarea><br/>
						</div>
					</div>
					<button className='editButtons' onClick={this.props.removeAssignment}> DELETE </button>
					<input className='editButtons' onClick={this.handleSubmit} type='submit'/>
				</div>
			</div>

		)
	}
}

export default EditHomeworkModal;