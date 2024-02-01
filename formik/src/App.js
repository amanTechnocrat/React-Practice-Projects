import './App.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'
function App() {

  const formik = useFormik({
    initialValues: {
      username: "",
      number: "",
      select: "",
      radio: ""
    },
    onSubmit: (val) => { console.log(val) },
    validationSchema: Yup.object({
      username: Yup.string().min(8, "Minimum 8 char req").required("Req"),
      number: Yup.number().required("req no"),
      select: Yup.string().required("Select is required"),
    })
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="username" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <br />
        {formik.errors.username && formik.touched.username && <span>{formik.errors.username}</span>}

        <input type="number" name="number" value={formik.values.number} onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <br />
        {formik.errors.number && formik.touched.number && <span>{formik.errors.number}</span>}<br />
        <label>status</label><br />
        <input type="radio" name="radio" value="active" onBlur={formik.handleBlur} onChange={formik.handleChange} />
        <label>active</label><br />
        <input type="radio" name="radio" value="unactive" onChange={formik.handleChange} />
        <label>unactive</label><br />
        <br /><br />
        <select name="select" onBlur={formik.handleBlur} onChange={formik.handleChange}>
          <option value="5">5</option>
          <option value="50">50</option>
          <option value="500">500</option>
        </select>
        {formik.errors.select && formik.touched && <span>{formik.errors.select}</span>}
        <button type='submit'>submit</button>
      </form>
    </>
  );
}

export default App;
