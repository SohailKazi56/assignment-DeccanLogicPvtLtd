import React from 'react';
import '../App.css';
import { Select,MenuItem, FormGroup, InputAdornment, Input, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faBold, faClock, faItalic, faPaperclip, faListOl, faList, faPhotoVideo, faReply, faShare, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { Grid, Cell, Switch} from 'react-mdl';
// import { Route } from 'react-router-dom';
// import Home from './Home';

 const Form = () => {

    // event getting value
    const [eventType, setEventType] = React.useState('');
    const handleEventChange = (event) => {
        setEventType(event.target.value);
    };

    // category getting value
    const [categoryType, setCategoryType] = React.useState('');
    const handleCategoryChange = (event) => {
        setCategoryType(event.target.value);
    };

    // timezone getting value
    const [TimezoneType, setTimezoneType] = React.useState('');
    const handleTimezoneChange = (event) => {
        setTimezoneType(event.target.value);
    };

    // Short summary getting value
    const [summary, setSummary] = React.useState('');
    const handleSummary = (event) => {
        setSummary(event.target.value);
    }

    // start date getting value
    const [sdate, setSdate ] = React.useState('');
    const handleChangeSdate = (event) => {
        setSdate(event.target.value);
    }

    // end date getting value
    const [edate, setEdate ] = React.useState('');
    const handleChangeEdate = (event) => {
        setEdate(event.target.value);
    }

    // start time getting value
    const [stime, setStime ] = React.useState('');
    const handleChangeStime = (event) => {
        setStime(event.target.value);
    }

    // end time getting value
    const [etime, setEtime ] = React.useState('');
    const handleChangeEtime = (event) => {
        setEtime(event.target.value);
    }

    const [textValue, setTextValue ] = React.useState('');
    const handleTextValue = (event) => {
        setTextValue(event.target.value);
    }

    // online link getting value
    const [onlineLink, setOnlineLink ] = React.useState('');
    const handleOlLink = (event) => {
        setOnlineLink(event.target.value);
    }

    // type public/private  getting value
    const [typeValue, setTypeValue ] = React.useState('');
    const handleType = (event) => {
        setTypeValue(event.target.value);
    }

    // title getting value
    const [titleValue, setTitleValue ] = React.useState('');
    const handleTitle = (event) => {
        setTitleValue(event.target.value);
    }

    // description box getting value
    const [descriptionType, setDescriptionType] = React.useState('');
    const handleDescriptionChange = (event) => {
        setDescriptionType(event.target.value);
    }

    var titleError = " it must contain a title ";
    var eventError = " it must contain a event type ";
    var categoryError = " it must contain a category type ";
    var summaryError = " it must contain a short summary ";
    var typeError = " it must contain a privacy type ";
    var onlineLinkError = " it must contain a onine link ";
    var timezoneError = " it must contain a timezone area ";
    var sdateError = " it must contain a start date ";
    var edateError = " it must contain a end date ";
    var stimeError = " it must contain a start time ";
    var etimeError = " it must contain a end time ";

    
    // validation part
    const valid = () => {

        if(titleValue.length < 1 ){
            // console.log("it must contain a title or a short summmary to proceed further");
            return titleError;
        }
        else if(eventType.length < 1){
            return eventError;
        }
        else if(categoryType.length < 1){
            return categoryError;
        }
        else if(summary.length < 1){
            return summaryError;
        }
        else if(typeValue.length < 1){
            return typeError;
        }
        else if(onlineLink.length < 1){
            return onlineLinkError;
        }
        else if(TimezoneType.length < 1){
            return timezoneError;
        }
        else if(stime.length < 1){
            return stimeError;
        }
        else if(etime.length < 1){
            return etimeError;
        }
        else if(sdate.length < 1){
            return sdateError;
        }
        else if(edate.length < 1){
            return edateError;
        }
        
        else{
            return true
        }
    }
    //submit button function
    const submittion = () => {
        
        if(valid() === true){
            alert(`Account for ${titleValue} created successfully`);

            // <Switch>
            //     <Route path="/" exact component={Home} />
            // </Switch>
        }

        else{
            alert(" fields with * are mandatory ")
        }
    }

    return (
        <div>

            {/* create cancel button code */}
            <Grid>
                <Cell col={8}>
                    <h6 style={{fontSize:"18px", fontWeight:"bold", color:"blue",margin:"0px"}}>Create Event</h6>
                </Cell>
                <Cell col={4} >
                    <button  className="cancel-button" style={{float:"right"}}>Cancel</button>
                    <button  className="create-button" style={{float:"right"}} type="submit" onClick={submittion} >Create</button>
                </Cell>
            </Grid>
                
            <hr style={{marginTop:"-5px"}}/>

            {/*  form code */}
            <div className="container-form">
                <form  className="form" style={{width:"50%", margin:"auto"}}>

                {/* add event type code */}
                <FormGroup>
                <label >Add Event in *</label>
                <Select
                    style={{width:"100%"}}
                    labelId="select-label"
                    placeholder="Select..."
                    id="event-id"
                    value={eventType}
                    onChange={handleEventChange}>
                
                <MenuItem value={"events type 1"} >Event 1</MenuItem>
                <MenuItem value={"events type 2"} >Event 2</MenuItem>
                <MenuItem value={"events type 3"} >Event 3</MenuItem>

                </Select>
                <p style={{color:"red", fontSize:"12px"}}>{eventError}</p>
                </FormGroup>
                
                {/* upload image code */}
                <button style={{padding:"18px",height:'96px',width:"96px",backgroundColor:"navy",textAlign:"center",margin:"16px 0px"}}>
                    <h6 style={{backgroundColor:"gray", color:"white", margin:"auto",borderRadius:"5px",fontSize:"16px"}}>
                    Upload image
                    </h6>
                </button>
                
                {/* title ui code */}
                <FormGroup>
                    <label >Title *</label>
                    <Input 
                    placeholder=""
                    onChange={handleTitle}
                    value={titleValue}
                    style={{width:"100%"}}
                    />
                    <label style={{textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                    <p style={{color:"red", fontSize:"12px",marginTop:"-20px"}}>{titleError}</p>
                </FormGroup>
                
                {/* categories ui code */}
                <FormGroup>
                    <label >Categories *</label>
                    <Select
                        style={{width:"100%"}}
                        labelId="category-select"              
                        id="category-id"
                        value={categoryType}
                        onChange={handleCategoryChange}>
                    
                    <MenuItem value={"category type 1"} >category 1</MenuItem>
                    <MenuItem value={"category type 2"} >category 2</MenuItem>
                    <MenuItem value={"category type 3"} >category 3</MenuItem>

                    </Select>
                    <p style={{color:"red", fontSize:"12px"}}>{categoryError}</p>
                </FormGroup>

                {/* short summary ui code */}
                <FormGroup style={{marginTop:"12px"}}>
                    <label >Short Summary *</label>
                    <Input 
                        onChange={handleSummary}
                        value={summary}
                        placeholder=""
                        style={{width:"100%"}}
                    />
                    <label style={{marginTop:"0px",textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                    <p style={{color:"red", fontSize:"12px",marginTop:"-20px"}}>{summaryError}</p>

                </FormGroup>

                {/* registration site ui code */}
                <FormGroup style={{marginTop:"0px"}}>
                    <label style={{fontWeight:"bold"}}>Type:  Public *</label>
                    <Input 
                    onChange={handleType}
                    value={typeValue}
                    placeholder="Registration site"
                    style={{width: '100%',marginTop:"0px"}}
                    />
                    <label style={{textAlign:"right",color:"gray",fontSize:"12px"}}>(0/300)</label>
                    <p style={{color:"red", fontSize:"12px",marginTop:"-20px"}}>{typeError}</p>
                </FormGroup>    

                {/* virtual event online link ui code */}
                <Grid style={{margin:"0px",marginLeft:"-15px"}}>
                    <Cell col={3}><label>Is this a virtual event ?</label></Cell>
                    <Cell col={1}><span > Yes </span></Cell>
                    <Cell col={1}><Switch defaultChecked /></Cell>
                </Grid>

                <Input 
                onChange={handleOlLink}
                value={onlineLink}
                placeholder="online link"
                style={{width: '100%',marginTop:"-35px"}}
                />
                <p style={{color:"red", fontSize:"12px"}}>{onlineLinkError}</p> 
                
                {/* timezone ui code */}
                <FormGroup style={{marginTop:"12px"}}>
                    <label>Select Timezone *</label>
                    <FormGroup style={{display:"block"}}>
                    <Select
                    style={{width:"70%"}}
                    labelId="timezone-select"
                    placeholder="Select Time..."
                    id="timezone-id"
                    value={TimezoneType}
                    onChange={handleTimezoneChange}>
                
                    <MenuItem value={"city-1"} >Pune</MenuItem>
                    <MenuItem value={"city-2"} >Mumbai</MenuItem>
                    <MenuItem value={"city-3"} >Bangalore</MenuItem>
                    <MenuItem value={"city-4"} >Delhi</MenuItem>

                    </Select>
                    <span style={{fontWeight:"bold",marginLeft:"8px"}}>GMT +5:30 ?</span>
                    <p style={{color:"red", fontSize:"12px"}}>{timezoneError}</p>
                    </FormGroup>
                </FormGroup>

                <Grid style={{width:"70%",margin:"0px", marginLeft:"-15px"}}>
                    <Cell col={6}>
                        <FormGroup >
                            <label >Start Date *</label>
                            <Input 
                            id="start-date-id"
                            value={sdate}
                            onChange={handleChangeSdate}
                            />
                            <p style={{color:"red", fontSize:"12px"}}>{sdateError}</p>
                        </FormGroup>
                    </Cell>
                    <Cell col={6}>
                        <FormGroup >
                            <label >Start Time *</label>
                            <Input
                            id="start-time-id"
                            value={stime}
                            onChange={handleChangeStime}
                            endAdornment={
                                <InputAdornment position="end">
                                <FontAwesomeIcon icon={faClock}  />
                                </InputAdornment>
                            }
                            />
                            <p style={{color:"red", fontSize:"12px"}}>{stimeError}</p>
                        </FormGroup>
                    </Cell>
                </Grid>

                <Grid style={{width:"70%",margin:"0px", marginLeft:"-15px"}} >
                    <Cell col={6}>
                        <FormGroup >
                            <label >End Date *</label>
                            <Input 
                            id="end-date-id"
                            value={edate}
                            onChange={handleChangeEdate}
                            />
                            <p style={{color:"red", fontSize:"12px"}}>{edateError}</p>
                        </FormGroup>
                    </Cell>
                    <Cell col={6}>
                        <FormGroup >
                            <label >End Time *</label>
                            <Input
                            id="end-time-id"
                            value={etime}
                            onChange={handleChangeEtime}
                            endAdornment={
                                <InputAdornment position="end">
                                <FontAwesomeIcon icon={faClock}  />
                                </InputAdornment>
                            }
                            />
                            <p style={{color:"red", fontSize:"12px"}}>{etimeError}</p>
                        </FormGroup>
                    </Cell>
                </Grid>
                
                {/* description box ui code */}
                <div style={{width:"101%",backgroundColor:"whitesmoke",marginBottom:"0px",marginTop:'8px',height:"1%"}}>

                    <Grid style={{height:"20px"}}>
                        <Cell col={3} style={{margin:"-15px 0px"}}>
                            <Select
                                style={{width:"100%",padding:"4px 12px"}}
                                // defaultValue={""}
                                id="description-id"
                                value={descriptionType}
                                onChange={handleDescriptionChange}>      
                            <MenuItem value={"para"}>Paragraph</MenuItem>
                            <MenuItem value={"chapter"} >Chapter</MenuItem>
                            </Select>
                            {/* <View style={{height:"100%", width:"2px",}} /> */}
                        </Cell> 
                        
                        <Cell col={9}>
                        <Grid style={{margin:"-35px 0px"}}>
                            <Cell col={1}> <IconButton style={{}}><FontAwesomeIcon icon={faImage} /></IconButton> </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faBold} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faItalic} /></IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faPaperclip} /></IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faList} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faListOl} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faImage} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faPhotoVideo} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faReply} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faShare} /> </IconButton>  </Cell>
                            <Cell col={1}> <IconButton> <FontAwesomeIcon icon={faAlignCenter} /> </IconButton>  </Cell>
                            <Cell col={1}></Cell>
                        </Grid>
                        </Cell>
                    </Grid>
                        
                </div>

                <textarea style={{width:"100%",height:"200px"}}
                    placeholder="Description (max limit 8000 characters)"
                    maxLength= "8000"
                    value={textValue}
                    onChange={handleTextValue}
                >
                </textarea>
                
                {/* attachments ui code */}
                <FormGroup style={{margin:"12px 0px"}}>
                <label>Attachments ?</label> 
                <button className="upload-file-btn">
                    <FontAwesomeIcon icon={faImage} style={{width:"40",height:"40", color:"gray"}} />
                    <p style={{fontSize:"16px",fontWeight:"bold"}}>Click here to upload file(s)</p>
                </button>
                </FormGroup>

                 {/* footer ui code */}               
                <p style={{marginTop:"48px",textAlign:"center",color:"gray"}}>Use options on the top right section of the screen to save your changes</p>
                

                </form>
            </div>
            
        </div>
    )
}

export default Form;
