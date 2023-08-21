import { motion } from "framer-motion" ;
import { Box, TextField, Button, Card } from "@mui/material";
import { formType } from './constant';
import '../../Styles/Auth/component.css';

type authProp = {
    setFormFunction : Function,
    form:string
}
export function Login():JSX.Element{
    return <motion.div>
                <Box component='form'  >
                    <Card>
                        <TextField label = "Username or Email" required />
                        <TextField label = "Password" required />
                        <Button variant="contained" >Log In</Button>
                    </Card>
                </Box>
            </motion.div>
}

export function SignUp():JSX.Element{
    return <motion.div>
                <Box component='form' >
                    <Card>
                        <TextField label = "FirstName" required />
                        <TextField label = "LastName" required />
                        <TextField label = "Email" required />
                        <TextField label = "Password" required />
                        <Button variant="contained" >Sign Up</Button>
                    </Card>
                </Box>
            </motion.div>
}


export function AuthSelector({setFormFunction, form}:authProp):JSX.Element{
        const anim = {
            initial:{
                backgroundColor: "whiteSmoke",
                color:"black",
                zIndex:1
            },
            clicked:{
                backgroundColor: "aquamarine",
                color:"white",
                zIndex:2,
                margin:"2em"
            }
        }

        function handleClickSignUp():void{
                    setFormFunction(formType.SIGNUP)
        }
        function handleClickLogIn():void{
                    setFormFunction(formType.Login)
        }
        return <motion.div id="authSelectorContainer" >
                        <motion.span  initial = "initial" animate = {form == formType.SIGNUP ?"clicked" : "initial"} variants={anim} className="singleAuthSelector" id="signUpButtonSpan" > <Button variant="outlined" onClick={handleClickSignUp} >Sign Up</Button> </motion.span>
                        <motion.span  initial = "initial" animate = {form == formType.Login ?"clicked" : "initial"} variants={anim} className="singleAuthSelector"  id="logInButtonSpan"  > <Button variant="outlined" onClick={handleClickLogIn} >Log In</Button> </motion.span>
               </motion.div>
}