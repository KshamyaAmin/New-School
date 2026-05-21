function Navbar({ title }) {
  return (

    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500">
          School Management System
        </p>
      </div>

    </div>
  );
}

export default Navbar;