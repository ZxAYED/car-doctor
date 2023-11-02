const Booking = ({ booking, handleDelete }) => {
  console.log(booking);
  const { _id, customerName, email, date, price, service, img, service_id } =
    booking;
  return (
    <div>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{customerName}</div>
                  <div className="text-sm opacity-50">{service}</div>
                </div>
              </div>
            </td>
            <td>
              {date}
              <br />
              {price}
            </td>
            <td>Purple</td>
            <th>
              <button
                onClick={() => {
                  handleDelete(_id);
                }}
                className="btn btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Confirm?
              </button>
            </th>
          </tr>
          </tbody>
 
    </div>
  );
};

export default Booking;
