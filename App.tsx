import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';

export default function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = () => {
    if (isLogin) {
      console.log('ログイン:', email, password);
    } else {
      if (password !== confirmPassword) {
        alert('パスワードが一致しません');
        return;
      }
      console.log('会員登録:', email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{isLogin ? 'ログイン' : '会員登録'}</Title>
      <TextInput
        label="メールアドレス"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="パスワード"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {!isLogin && (
        <TextInput
          label="パスワード確認"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />
      )}
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        {isLogin ? 'ログイン' : '会員登録'}
      </Button>
      <Button onPress={() => setIsLogin(!isLogin)} style={styles.link}>
        {isLogin ? 'アカウントを作成する' : 'すでにアカウントを持っている'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  link: {
    marginTop: 16,
  },
});
