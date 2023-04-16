import { StyleSheet } from "react-native"; 
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24, 
        marginBottom: 30
    }, 

    logo:{
        marginTop: 124,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoSubtitle: {
        fontSize: 18,
        marginTop: 8
    }, 

    content: {
        marginTop: 37,
    },  

    title: {
        fontSize: 16,
    }, 

    forgotPassword: {
        marginVertical: 24, 
        textDecorationLine: 'underline',
    },

    register: {
        flexDirection: 'row',
        marginTop: 36, 
        justifyContent: 'center',

    },

    accompanyRegisterText: {
        marginRight: 5,
        fontSize: 13
    }, 

    registerText: {
        fontSize: 13,
        color: theme.colors.primary

    }
})