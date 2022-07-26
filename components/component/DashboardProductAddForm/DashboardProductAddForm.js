import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../../styles/DashboardProductAddForm.module.css'


function DashboardProductAddForm() {
  return (
    <div className="container" id={styles.AddformContainer}>
      <div className="row">
        <div className="col-lg-6">
          <section className="panel panel-default">
            <div className="panel-body">
              <div action="designer-finish.html" className="form-horizontal" role="form">
                <div className="form-group">
                  <label for="name" className="col-sm-3 control-label">Title</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Product Name " />
                  </div>
                </div>
                <div className="form-group">
                  <label for="name" className="col-sm-3 control-label">Price</label>
                  <div className="col-sm-9">
                    <input type="Number" className="form-control" name="name" id="name" placeholder="Product Price" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="about" className="col-sm-3 control-label">Description</label>
                  <div className="col-sm-9">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-6" id={styles.Addform}>
          <div className="form-group" id={styles.productSizing}>
            <label for="qty" className="col-sm-3 control-label">Weight</label>
            <div className="col-md-10">
              <input type="text" className="form-control" name="qty" id="qty" placeholder="Weight_" />
            </div>
            <label for="qty" className="col-sm-3 control-label"> Width</label>
            <div className="col-md-10">
              <input type="text" className="form-control" name="qty" id="qty" placeholder="Width" />
            </div>
            <label for="qty" className="col-sm-3 control-label"> Height</label>
            <div className="col-md-10">
              <input type="text" className="form-control" name="qty" id="qty" placeholder="Height" />
            </div>
          </div>



        </div>

        <div className="col-lg-12">

          <div className="form-group">
            <label for="name" className="col-sm-3 control-label">Image Upload</label>
            <div className="col-sm-3">
              <label className="control-label small" for="file_img">Format (jpg/png):</label> <input type="file" name="file_img" />
            </div>
            <div className="col-sm-3">
              <label className="control-label small" for="file_img">Image</label>  <input type="file" name="file_archive" />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <hr />
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardProductAddForm;