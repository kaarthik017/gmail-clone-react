export default function Header(){
    return <>
    <div className="header">
  <div className="header__left">
    <span className="material-icons"> menu </span>
    <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
  </div>
  <div className="header__middle">
    <span className="material-icons"> search </span>
    <input type="text" placeholder="Search mail" />
    <span className="material-icons"> arrow_drop_down </span>
  </div>
  <div className="header__right">
    <span className="material-icons"> apps </span>
    <span className="material-icons"> notifications </span>
    <span className="material-icons"> account_circle </span>
  </div>
</div>
    </>
}