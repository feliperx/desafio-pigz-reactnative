import { StyleSheet } from "react-native"; 
import theme from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 48, 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: theme.colors.border
        
    }, 

    title: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: theme.fonts.medium,
        color: theme.colors.text
    },

    icon: {
        marginLeft: 16,
    }

})