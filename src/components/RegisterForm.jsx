import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas"

function RegisterForm() {


    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm()
        }, 2000)
    }

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: '',
            age: "",
            password: "",
            confirmPassword: "",
            term: ""
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit


    });
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className='inputDiv' type="email" placeholder='Emailinizi giriniz'
                        id='email'
                        value={values.email}
                        onChange={handleChange} />

                    {errors.email && <p className='errors-input'> {errors.email} </p>}

                </div>
                <div>
                    <label htmlFor="age">Yaş</label>
                    <input className='inputDiv' type="text" placeholder='Yaşınızı giriniz'
                        id='age'
                        value={values.age}
                        onChange={handleChange} />

                    {errors.age && <p className='errors-input'> {errors.age} </p>}


                </div>
                <div>
                    <label htmlFor="password">Şifre</label>
                    <input className='inputDiv' type="password" placeholder='Şifrenizi giriniz'
                        id='password'
                        value={values.password}
                        onChange={handleChange} />

                    {errors.password && <p className='errors-input'> {errors.password} </p>}

                </div>

                <div>
                    <label htmlFor="confirmPassword">Şifre Tekrarı</label>
                    <input className='inputDiv' type="password" placeholder='Şifrenizi Tekrar giriniz'
                        id='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange} />

                    {errors.confirmPassword && <p className='errors-input'> {errors.confirmPassword} </p>}


                </div>

                <div>

                    <input className='inputDiv' style={{ width: "20px", cursor: "pointer" }} type="checkbox"
                        id='term'
                        value={values.term}
                        onChange={handleChange}

                    />
                    <label htmlFor="checkbox" >Kullanıcı sözleşmesini okudum onaylıyorum</label>
                    {errors.term && <p className='errors-input'> {errors.term} </p>}

                </div>


                <button onClick={handleSubmit} className='inputButton'>Kaydet</button>



            </form>



        </div>
    )
}

export default RegisterForm
