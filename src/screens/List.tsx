import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';
import { MainStackParams } from '../navigation/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'List'>;
};

export const List = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const screens = [
    {
      title: t('ui.text'),
      subtitle: t('demo-screens.text.short'),
      target: 'TextDemo',
    },
    {
      title: t('ui.form'),
      subtitle: t('demo-screens.form.short'),
      target: 'FormDemo',
    },
    {
      title: t('ui.button'),
      subtitle: t('demo-screens.button.short'),
      target: 'ButtonDemo',
    },
    {
      title: t('ui.lang'),
      subtitle: t('demo-screens.lang.short'),
      target: 'LangDemo',
    },
  ];
  return (
    <>
      <FlatList
        style={styles.container}
        data={screens}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            onPress={() =>
              navigation.navigate(item.target as keyof MainStackParams)
            }
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    </>
  );
};
