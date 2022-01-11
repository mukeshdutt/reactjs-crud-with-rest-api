import React from "react";
import { Link, useParams } from "react-router-dom";

class DeletePerson extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleSubmit(e) {
    if (window.confirm("Are you sure to delete this record?")) {
      this.context.router.push({
        pathname: "/person/all",
      });
    }
    e.preventDefault();
  }

  render() {
    const { navigation } = this.props;
    console.log(navigation);
    const id = navigation.getParam("id");
    console.log(id);

    return (
      <React.Fragment>
        <h4>Delete Person</h4>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-6">
              <form>
                <div class="form-group mt-3">
                  <label htmlFor="name">Name</label>
                  <label htmlFor="name" className="ps-5">
                    Name
                  </label>
                </div>
                <div class="form-group mt-3">
                  <label>Mobile</label>
                  <label className="ps-5">Mobile</label>
                </div>
                <div class="form-group mt-3">
                  <label>Email</label>
                  <label className="ps-5">Email</label>
                </div>
                <div class="form-group mt-3">
                  <label>Gender</label>
                  <label className="ps-5">Gender</label>
                </div>
                <div class="form-group mt-3">
                  <label>Address</label>
                  <label className="ps-5">Address</label>
                </div>
                <div class="form-group mt-3">
                  <label>Hobbies</label>
                  <label className="ps-5">Hobbies</label>
                </div>
                <div class="form-group mt-3">
                  <label>State</label>
                  <label className="ps-5">State</label>
                </div>
                <div class="form-group mt-3">
                  <button
                    className="btn btn-primary me-3"
                    onClick={this.handleSubmit}
                  >
                    Delete Submit
                  </button>
                  <button className="btn btn-info me-3">
                    <Link
                      to="/persons/all"
                      className="text-decoration-none text-white"
                    >
                      Go back
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeletePerson;
