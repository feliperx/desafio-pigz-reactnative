import { StyleSheet } from "react-native"; 


export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: 48, 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        
    }, 

    title: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },

    icon: {
        marginLeft: 16,
    }

})