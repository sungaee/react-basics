import { useState } from 'react'
const Register = () => {
  const [name, setName] = useState('이름')
  const [birth, setBirth] = useState("")
  const [country, setCountry] = useState("")
  const [bio, setBio] = useState("")

  //TODO ts 적용
  const onChangeName = (e:any) => {
    setName(e.target.value)
  }
  const onChangeBirth = (e:any) => {
    setBirth(e.target.value)
  }
  const onChangeCountry = (e:any) => {
    setCountry(e.target.value)
  }
  const onChangeBio=(e:any)=>{
    setBio(e.target.value)
  }
  return (
    <>
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={'이름'} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
    </div>
    <div>
        <select value={country} onChange={onChangeCountry}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
        </select>
    </div>
    <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
    </div>
    </>
  )
}
export default Register
