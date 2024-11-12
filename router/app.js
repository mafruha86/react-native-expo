impor { statusbar } from 'expo-status-bar'
impor { StyleSheet, text, view } from 'react-native';

expect default function app() {
    return (
        <view style={StyleS.container}>
            <text>hello mafruhah</text>
            <statusbar style="auto" />
        </view>

    );
}