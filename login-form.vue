<template>
    <div class="login-form" 
       @keyup.enter="doLogin"
       @keyup.esc="resetVals"
     >
      <div class="header-title">
        <h3>{{headerTitle}}</h3>
      </div>
      <div class="form-row">
         <label>{{emailLabel}}</label>
         <input 
           type="text" 
           placeholder="email" 
           v-model="email"
           ref="emailInput"
         />
      </div>
      <div class="form-row">
         <label>{{passwordLabel}}</label>
         <input 
           :type="muestra" 
           placeholder="password" 
           v-model="password"
           ref="passwordInput"
         />
      </div>
      <p style="padding-right: 1em; text-align: right;">
          <input 
            type="checkbox" 
            v-model="showPassword"
          />
          <label
            style="font-weight: lighter; font-size: 9pt;"
          >
            {{showPasswordLabel}}
          </label>
      </p>
      <div class="form-row" style="justify-content: center;">
        <p class="feedback" v-if="feedback">{{ feedback }}</p>
        <p v-else></p>
      </div>
      <div class="form-row">
          <button class="btn white-fg red" @click="resetVals">{{resetText}}</button>
          <button class="btn white-fg blue" @click="doLogin">{{loginText}}</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        props: {
            headerTitle: {type: String, default: 'Formulario de Ingreso'},
            resetText: {type: String, default: 'Borrar'},
            loginText: {type: String, default: 'Ingresar'},
            passwordLabel: {type: String, default: 'Contraseña'},
            emailLabel: {type: String, default: 'Correo'},
            showPasswordLabel: {type: String, default: 'Mostrar contraseña'},
            feedbackText: {type: String}
        },
        data() {
            return {
                email: null,
                password: null,
                feedback: null,
                showPassword: false, 
            }
        },
        methods: {
            showMail() { 
                /*
                console.clear()
                console.log(this.email)
                console.log("")
                */
            },

            resetVals() {
                this.email = null,
                this.password = null;
            },
            doLogin() {
                if (!this.email || !this.password) {
                    this.feedback = this.feedbackText || "Debe incluir email y password"
                    if (!this.email) {
                        this.$refs.emailInput.focus()
                    } else {
                        this.$refs.passwordInput.focus()
                    }
                    return
                }
                this.feedback = null
                this.$emit('login', {email: this.email, password: this.password}, Date.now())
                //setTimeout(() => alert(`email: ${this.email} - password: ${this.password}`), 0)
            },
        },
        computed: {
            muestra() {
                return this.showPassword ? "text" : "password"
            }
        }
    }
</script>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        /* max-width:33%; 
        min-width: 33%; */
        height: 50%;
        max-height: 50%;
        min-height: 50%;
        margin: 0 auto;
        margin-top: 30px;
        padding: 0.3em;
        border: solid 1px;
        border-radius: 8px;
        background: #eee;
        box-shadow: 4px 6px slategray;
    }
    .header-title {
        width: 100%;
        text-align: center;
        background: inherit;
        color: steelblue;
        border-bottom: solid 1px;
    }
    .form-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 1em;
        padding-right: 1em;
        margin-top: auto;
        margin-bottom: 0.5em;
    }
    .form-row label {
        font-weight: bold;
        color: #888;
    }
    .form-row input {
        padding-left: 10px;
        height: 2em;
        width: 50%;
    }
    .feedback {
        color: red;
        text-align: center;
    }

    .white-fg {
        color: whitesmoke;
    }

    .blue {
        background: steelblue;
    }

    .red {
        background: darkred;
    }

    .btn {
        padding: 0.75em;
        font-weight: bold;
        border-radius: 8px;
        opacity: 0.85;
        border-collapse: collapse;
        border-style: none;
        cursor: pointer;
    }

    .btn:hover {
        opacity: 0.99;
    }

    @media only screen and (min-width: 1048px) {
        .login-form {
            width: 33%;
        }
    }
</style>
