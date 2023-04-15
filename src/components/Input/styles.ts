import { StyleSheet } from "react-native"; 
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 

    titleInput: {
        fontSize: 13,
        // fontFamily: theme.fonts.regular
        marginTop: 16,
        marginBottom: 6,
        alignSelf: 'flex-start'
    },

    content: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: theme.colors.primary,
        paddingHorizontal: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
    }, 

    textInput: {
        fontSize: 14,
    },

    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }

})