import '../userdetails.css'
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


export default function USeredit()
   {
      
       const navigate = useNavigate();
      const {firstName} = useParams()
      
      const [user,setUSer] = useState({})
    
      const users=JSON.parse(localStorage.getItem('user_data'))
      
      useEffect((val) => {
  
  
          const user_to_edit = users.find((val)=> val.firstName === firstName)
          
          if(user_to_edit){
              setUSer(user_to_edit)
          }
},[])

      const  handle_user_stored_data = (ev) => {
        
        let updated_data = users.map((val)=> val.id === user.id ? user : val )
          
          localStorage.setItem('user_data',JSON.stringify(updated_data))


      }
      //----storing perticuler user's input detail in an object------
  
  
      const handle_user_input = (ev) => {
  
          const { value, name, checked, type } = ev.target;
          
          
          //users details if it is type is checkbox
  
          if (type === 'checkbox') {
  
              let selected_genre = user?.genre?.length > 0 ? [...user.genre] : [];
              let genre;
              selected_genre.push(value);
  
              if (checked) {
                  setUSer(
                      {
                          ...user,
                          genre: selected_genre
                      }
                  )
              }
              else {
  
                  setUSer(
                      {
                          ...user,
                          genre: selected_genre.filter((val) => val != value)
                      }
                  )
              }
  
          }
  
          //users details if it is type normal
  
          else {
              setUSer(
  
                  {
                      ...user,
                      [name]: value
                  }
  
              )
          }
          
        }
        // console.log(user);
  
  
  // -----end----  
      return (
          <div className="userdetails-body">
              <div className="form-container">
  
  
                  <div className="form-header">
                      <h1>My Bookstore Account</h1>
                      <p>Update your profile and preferences.</p>
                  </div>
  
  
                  <form id="userDetailForm">
                      <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
  
                              value={user.firstName || ''}
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              placeholder=''
  
                              onChange={(ev) => handle_user_input(ev)}
                            
  
                          />
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              placeholder=" "
                              value={user.lastName || ''}

  
                              onChange={(ev) => handle_user_input(ev)}
                          />
                          
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">password</label>
                          <input
                              type="password"
                              id="password"
                              name="password"
                              required
                              placeholder=" "
                              value={user.password || ''}

  
                              onChange={(ev) => handle_user_input(ev)}
                          />
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              placeholder="@gmail.com "
                              value={user.email || ''}
                              
  
                              onChange={(ev) => handle_user_input(ev)}
                          />
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="shippingAddress">Shipping Address</label>
                          <textarea
  
                              id="shippingAddress"
                              name="shippingAddress"
                              required placeholder=" "
                              value={user.shippingAddress || ''}

  
                              onChange={(ev) => handle_user_input(ev)}
                          />
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <select
  
                              id="country"
                              name="country"
                              value={user.country || ''}

                              
  
                              onClick={(ev) => handle_user_input(ev)}
  
                          >
                              <option>Select Country</option>
                              <option>United States</option>
                              <option>Canada</option>
                              <option>India</option>
                              <option>United Kingdom</option>
                              <option>Australia</option>
                          </select>
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="city">City</label>
                          <input
  
                              type="text"
                              id="city"
                              name="city"
                              placeholder=" "
                              value={user.city || ''}

  
                              onChange={(ev) => handle_user_input(ev)}
  
                          />
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="gender">Gender</label>
                          <div className="gender-options">
                              <div className="option-item">
                                  <input
  
                                      id="male"
                                      name="gender"
                                      type="radio"
                                      value="male"
                                      checked={user.gender === 'male'}
  
                                      onChange={(ev) => handle_user_input(ev)}
  
                                  />
                                  <label htmlFor="male">Male</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      id="female"
                                      name="gender"
                                      type="radio"
                                      value="female"
                                      checked={user.gender === 'female'}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="female">Female</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      id="other"
                                      name="gender"
                                      type="radio"
                                      value="other"
                                      checked={user.gender === 'other'}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="other">Other</label>
                              </div>
                          </div>
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="language">Preferred Language</label>
                          <select
  
                              id="language"
                              name="language"
                              value={user.language}

  
                              // onChange={(ev)=> console.log(ev)
  
                              onChange={(ev) => handle_user_input(ev)}
  
                          >
                              <option>Select Language</option>
                              <option>English</option>
                              <option>Spanish</option>
                              <option>Hindi</option>
                              <option>French</option>
                              <option>German</option>
                          </select>
                      </div>
  
                      <div className="form-group">
                          <label htmlFor="genre">Favorite Genres</label>
                          <div className="options-grid">
                              <div className="option-item">
                                  <input
                                      type="checkbox"
                                      id="fantasy"
                                      name="genre"
                                      value="fantasy"
                                        checked={(user.genre || []).includes('fantasy')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="fantasy">Fantasy</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      type="checkbox"
                                      id="sci-fi"
                                      name="genre"
                                      value="sci-fi"
                                        checked={(user.genre || []).includes('sci-fi')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="sci-fi">Sci-Fi</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      type="checkbox"
                                      id="mystery"
                                      name="genre"
                                      value="mystery"
                                        checked={(user.genre || []).includes('mystry')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="mystery">Mystery</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      type="checkbox"
                                      id="romance"
                                      name="genre"
                                      value="romance"

                                            checked={(user.genre || []).includes('romance')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="romance">Romance</label>
                              </div>
                              <div className="option-item">
                                  <input
  
                                      type="checkbox"
                                      id="biography"
                                      name="genre"
                                      value="biography"
                                        checked={(user.genre || []).includes('biography')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="biography">Biography</label>
                              </div>
                              <div className="option-item">
                                  <input
                                      type="checkbox"
                                      id="history"
                                      name="genre"
                                      value="history"
                                        checked={(user.genre || []).includes('history')}

                                      onChange={(ev) => handle_user_input(ev)}
                                  />
                                  <label htmlFor="history">History</label>
                              </div>
                          </div>
                      </div>
  
                      <div className="form-group" style={{ marginTop: '2.5rem' }}>
                          <button
  
                              type="submit"
                              className="submit-btn"
  
                              onClick={(ev) => handle_user_stored_data()}
  
                              onDoubleClick={(ev) => navigate('/home')}
                          >Save Changes</button>
                      </div>
                  </form>
              </div>
          </div>
  
      )
  }