import { Alert } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../components/Text';
import { Button } from '../components/Button/Button';
import { CenterPage } from '../components/CenterPage';
import LanguagePicker from '../components/LanguagePicker/LanguagePicker';

const LangDemo = () => {
  const { t } = useTranslation();
  return (
    <CenterPage>
      <LanguagePicker />
      <Text type="header">{`${t('hello')}!`}</Text>
      <Button style={{ padding: 10 }} onPress={() => Alert.alert(t('hello'))}>
        {t('ui.press')}
      </Button>
    </CenterPage>
  );
};

export default LangDemo;
