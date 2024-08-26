import { useState } from 'react';
import { 
        StyleSheet,
        Text,
        View,
        TouchableOpacity 
           
} from 'react-native';

function App() {
   const [input, setInput] = useState ('');
   const [result, setResult] = useState ('');

   const handlePress = (value) => {
     if (value === '=') {
       calculateResult();
     } else if (value === 'C') {
       clearInput();
     } else if (value === '√') {
       calculateSquareRoot();
     } else if (value === '^') {
       setInput(input + '**');
     } else {
       setInput(input + value);
     }
   };
    
   const calculateResult = () => {
     try {
       const calculation = eval(input);

   setResult(calculation.toString());
    } catch (error) {
      setResult ('Error');
    }
};

   const calculateSquareRoot = () => {
     try {
       const calculation = Math.sqrt(eval(input));

       setResult(calculation.toString());
     } catch (error) {
       setResult('Error');
   }
  };
   
  const clearInput = () => {
    setInput ('');
    setResult ('');
  };

  const buttons = [
     'C', '√', '^', '/', 
     '7', '8', '9', '*',
     '4', '5', '6', '-',
     '1', '2', '3', '+',
     'C', '0', '.', '='
];

 return (
   <View style={styles.container}>
     <Text style={styles.heading}>Calculator</Text>
     <View
style={styles.resultContainer}>
        <Text
style={styles.inputText}>{input}</Text>

        <Text
style={styles.resultText}>{result}</Text>
       </View>
       <View
style={styles.buttonsContainer}>
        {buttons.map((button) => (
          <TouchableOpacity
           key={button}
           style={styles.button}
           onPress={() =>
handlePress (button)}
          >
          <Text
style={styles.buttonText}>{button}</Text>

          </TouchableOpacity>
        ))}
      </View>
     </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
    padding: 20,
  },
  inputText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  resultText: {
    fontSize: 48,
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: '20', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAA00',
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
},
});

export default App;