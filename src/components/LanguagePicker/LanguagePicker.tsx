import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View, Pressable, StyleSheet } from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button/Button';
import { CenterPage } from '../CenterPage';

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation();

  const LanguageItem = ({ name, label }: { name: string; label: string }) => {
    return (
      <Button
        onPress={() => {
          i18n.changeLanguage(name);
          setModalVisible(!modalVisible);
        }}
      >
        {label}
      </Button>
    );
  };

  const languages = [
    { name: 'en-EN', label: 'English' },
    { name: 'pl-PL', label: 'Polski' },
  ];

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CenterPage>
          <View>
            {languages.map(lang => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </CenterPage>
      </Modal>
      <Pressable
        style={{
          width: 50,
          height: 50,
          margin: 10,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12.25,
          backgroundColor: '#E0E0E0',
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text>{i18n.language.substring(0, 2)}</Text>
      </Pressable>
    </View>
  );
};

export default LanguagePicker;
