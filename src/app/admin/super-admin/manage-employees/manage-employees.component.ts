import { ResponseJson } from './../../../domain/ResponseJson';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormBuilder
} from '@angular/forms';

import { UserDetail } from '../../../domain/user-detail';

import { EmployeeService } from '../../../services/super-admin/employee.service';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: [
    './manage-employees.component.css',
    '../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../node_modules/ng2-toasty/style-material.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ManageEmployeesComponent implements OnInit {
  response: ResponseJson;
  user: UserDetail;
  editUser: UserDetail;
  userArray: UserDetail[];
  rmArray: UserDetail[];
  unmappedCustomerArray: UserDetail[];
  mappedCustomerArray: UserDetail[];

  message: String;
  idArray: Number[] = [];
  customeridArray: Number[] = [];

  httpmsg: String = 'Processing your request';
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    address: [''],
    role: [''],
    userId: [''],
    contact: [''],
    roleId: ['']
  });

  display = 'none';
  name = '';
  email = '';
  address = '';
  contact = '';
  role = '';
  userId = '';
  roleId = '';

  position = 'top-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 8000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  addEmployee = function() {
    const user: UserDetail = this.profileForm.value as UserDetail;
    this.employeeService.addEmployee(user).subscribe(data => {
      this.response = data;
      if (this.response.error) {
        this.addToast({
          title: '',
          msg: this.response.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'error',
          position: 'top-right',
          closeOther: true
        });
      } else {
        this.addToast({
          title: '',
          msg: this.response.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
        this.profileForm.reset();
      }
    });
  };

  constructor(
    public http: Http,
    private employeeService: EmployeeService,
    private toastyService: ToastyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.newEmployeesList();
    this.rmList();
    this.unmappedCustomersList();
    this.mappedCustomersList();
  }

  newEmployeesList() {
    this.employeeService.getEmployees().subscribe(data => {
      this.response = data;
      this.userArray = <UserDetail[]>this.response.result;
      // // console.log(this.userArray.length);
      this.userArray.forEach(element => {
        // // console.log('Cust Name:::::' + JSON.stringify(element));
      });
    });
  }

  changeEmployeeStatus = function(id, status) {
    if (confirm('Are you sure ?')) {
      this.employeeService.changeEmployeeStatus(id, status).subscribe(data => {
        this.message = data.message;
        if (data) {
          this.addToast({
            title: '',
            msg: data.message,
            showClose: true,
            timeout: 8000,
            theme: 'bootstrap',
            type: 'success',
            position: 'top-right',
            closeOther: true
          });
          this.newEmployeesList();
        } else {
          this.addToast({
            title: '',
            msg: data.message,
            showClose: true,
            timeout: 8000,
            theme: 'bootstrap',
            type: 'error',
            position: 'top-right',
            closeOther: true
          });
        }
      });
    }
  };

  // editEmployeeDetails = function(user) {
  //   // console.log(user);
  // };

  hideAlert = function() {
    this.customerRequired = false;
  };

  openModal = function(user) {
    // // console.log(user);
    this.name = user.name;
    this.email = user.email;
    this.contact = user.contact;
    this.address = user.address;
    this.role = user.role;
    this.userId = user.userId;
    this.roleId = user.roleId;
    // // console.log(this.editUser);
    this.display = 'block';
  };

  onCloseHandled() {
    this.display = 'none';
  }

  editEmployee = function(user) {
    // console.log(user.value);
    this.employeeService.editEmployee(user.value).subscribe(data => {
      this.response = data;
      if (this.response.error) {
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'error',
          position: 'top-right',
          closeOther: true
        });
      } else {
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
        this.newEmployeesList();
        this.display = 'none';
      }
    });
  };

  rmList() {
    this.employeeService.getRmList().subscribe(data => {
      this.response = data;
      this.rmArray = <UserDetail[]>this.response.result;
      // console.log(this.rmArray);
    });
  }

  unmappedCustomersList() {
    this.employeeService.getUnmappedCustomersList().subscribe(data => {
      this.response = data;
      this.unmappedCustomerArray = <UserDetail[]>this.response.result;
      // console.log(this.unmappedCustomerArray);
    });
  }

  mappedCustomersList() {
    this.employeeService.getMappedCustomersList().subscribe(data => {
      this.response = data;
      this.mappedCustomerArray = <UserDetail[]>this.response.result;
      console.log(this.mappedCustomerArray);
    });
  }

  unmapCustomerFromRM(customerId) {
    this.employeeService.unmapCustomerFromRM(customerId).subscribe(data => {
      console.log(data);
      if (data.result) {
        this.mappedCustomersList();
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'success',
          position: 'top-right',
          closeOther: true
        });
      } else {
        this.addToast({
          title: '',
          msg: data.message,
          showClose: true,
          timeout: 8000,
          theme: 'bootstrap',
          type: 'error',
          position: 'top-right',
          closeOther: true
        });
      }
    });
  }

  mapCustomers = function(user) {
    this.userId = user.value;
    // console.log(user.value.userId);
    if (this.customeridArray.length > 0 && user.value.userId > 0) {
      console.log(this.customeridArray)
      this.employeeService
        .mapCustomersToRM(user.value.userId, this.customeridArray)
        .subscribe(data => {
          this.response = data;
          console.log(this.response);
          if (!this.response.error) {
            this.addToast({
              title: '',
              msg: this.response.message,
              showClose: true,
              timeout: 8000,
              theme: 'bootstrap',
              type: 'success',
              position: 'top-right',
              closeOther: true
            });
            this.unmappedCustomersList();
            this.idArray = [];
          }
        });
      // }
    } else {
      this.addToast({
        title: '',
        msg:
          'In order to map customers, both RM and Customer (atleast 1) must be selected.',
        showClose: true,
        timeout: 8000,
        theme: 'bootstrap',
        type: 'error',
        position: 'top-right',
        closeOther: true
      });
    }
  };

  onChange(id: Number, isChecked: boolean) {
    if (isChecked) {
      this.idArray.push(id);
    } else {
      const index = this.idArray.indexOf(id);
      if (index > -1) {
        this.idArray.splice(index, 1);
      }
    }
    // console.log(this.idArray);
    this.customeridArray = this.idArray;
  }

  refreshEmployees() {
    this.newEmployeesList();
  }

  refreshUnMapppedCustomers() {
    this.unmappedCustomersList();
    this.rmList();
  }

  refreshMapppedCustomers() {
    this.mappedCustomersList();
  }

  refreshAddEmployees() {}

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default':
        this.toastyService.default(toastOptions);
        break;
      case 'info':
        this.toastyService.info(toastOptions);
        break;
      case 'success':
        this.toastyService.success(toastOptions);
        break;
      case 'wait':
        this.toastyService.wait(toastOptions);
        break;
      case 'error':
        this.toastyService.error(toastOptions);
        break;
      case 'warning':
        this.toastyService.warning(toastOptions);
        break;
    }
  }
}
