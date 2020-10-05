import React from "react";
import "./Login.scss";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Loading, Card, Form, Input, Button} from "element-react";
import {UserLogin} from "../actions/auth";

interface PropsType {
  login_props: string;
  UserLogin: any;
  history: any;
  auth: any;
}

interface StateType {
  form: any;
  rules: object;
  loading: boolean;
}

class Login extends React.Component<PropsType, StateType> {
  static defaultProps = {};

  constructor(props: any) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: "",
      },

      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {required: true, message: "Password is required", trigger: "blur"},
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
      },

      loading: false,
    };
  }

  onChange(key: any, value: any) {
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value}),
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();

    (this as any).refs.form.validate((valid: boolean) => {
      if (valid) {
        console.log("submit!");
        this.setState({
          loading: true,
        });

        setTimeout(() => {
          this.setState({
            loading: false,
          });
          const data = {
            email: this.state.form.email,
            password: this.state.form.password,
            remember: true,
          };
          this.props.UserLogin(data).then(() => {
            this.props.history.push("/");
          });
        }, 1000);
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  render() {
    return (
      <div className="login">
        <Loading loading={this.state.loading}>
          <Card>
            <h2>Login</h2>
            <Form
              className="login-form"
              model={this.state.form}
              rules={this.state.rules}
              ref="form"
            >
              <Form.Item prop="email">
                <Input
                  value={this.state.form.email}
                  placeholder="Email"
                  type="email"
                  onChange={this.onChange.bind(this, "email")}
                ></Input>
              </Form.Item>
              <Form.Item prop="password">
                <Input
                  value={this.state.form.password}
                  placeholder="Password"
                  type="password"
                  onChange={this.onChange.bind(this, "password")}
                ></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="login-button"
                  native-type="submit"
                  onClick={this.handleSubmit.bind(this)}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Loading>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {
  UserLogin: UserLogin,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
