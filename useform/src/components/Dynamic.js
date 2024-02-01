import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

const Dynamic = () => {

    const { register, control, handleSubmit } = useForm()
    const { append, fields, remove } = useFieldArray({
        control, name: "items"
    })
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((val, index) => {
                    
                    return (
                      <div key={val.id}>
                            <input  {...register(`items[${index}].firstname`)} defaultValue={val.firstname} placeholder="First Name" />
                            <input  {...register(`items[${index}].lastname`)} defaultValue={val.lastname} placeholder="Last Name" />
                            <button onClick={() => remove(index)}>Remove</button><br />
                            <br />
                        </div>
                    )
                })}
                <button type='button' onClick={() => append({})}>Add User</button>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </>
    )
}

export default Dynamic