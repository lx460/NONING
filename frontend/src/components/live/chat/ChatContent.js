import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from '@rneui/themed';
import React from 'react';

export default function ChatContent({data}) {
  return data.betray == null ? (
    <View
      style={{
        flex: 1,
        flexDirection: data.userVote == 1 ? 'row' : 'row-reverse',
        marginBottom: '5%',
      }}>
      <View
        style={{flex: 0.9, justifyContent: 'flex-start', alignItems: 'center'}}>
        <TouchableOpacity>
          <Avatar
            size={40}
            rounded
            containerStyle={[
              {
                borderWidth: 3,
                backgroundColor: 'white',
                marginTop: '1%',
              },
              {
                borderColor: data.userVote == 1 ? '#FF5F5F' : '#49D3CA',
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4.2}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000000',
            textAlign: data.userVote == 1 ? 'left' : 'right',
            paddingHorizontal: '1%',
            fontSize: 14,
          }}>
          {data.nickname}
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: data.userVote == 1 ? 'left' : 'right',
            backgroundColor: '#C9C9C9',
            borderRadius: 7,
            paddingHorizontal: '4%',
            paddingVertical: '1%',
            fontSize: 14,
          }}>
          {data.msg}
        </Text>
      </View>
      <View style={{flex: 0.9, justifyContent: 'flex-end'}}>
        <Text
          style={{
            color: '#C9C9C9',
            textAlign: data.userVote == 1 ? 'left' : 'right',
            fontSize: 9,
            marginHorizontal: '6%',
          }}>
          {data.reg}
        </Text>
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '5%',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: data.betray ? '#FF5F5F' : '#000000',
        }}>
        {data.msg}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});