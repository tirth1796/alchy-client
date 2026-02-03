import { CreditCard } from '@/components/credit-card';
import { Stack } from 'expo-router';
import { FlatList, View } from 'react-native';

// Mock data for saved cards
const mockCards = [
  {
    id: '1',
    brand: 'Visa',
    bank: 'Chase',
    owner: 'John Doe',
    last4: '1234',
    expiryMonth: '12',
    expiryYear: '25',
    colors: ['#1e3a8a', '#1e40af'] as [string, string],
  },
  {
    id: '2',
    brand: 'Mastercard',
    bank: 'Bank of America',
    owner: 'Jane Smith',
    last4: '5678',
    expiryMonth: '08',
    expiryYear: '26',
    colors: ['#dc2626', '#ea580c'] as [string, string],
  },
  {
    id: '3',
    brand: 'American Express',
    bank: 'Wells Fargo',
    owner: 'Alice Johnson',
    last4: '9012',
    expiryMonth: '05',
    expiryYear: '27',
    colors: ['#06b6d4', '#2563eb'] as [string, string],
  },
];

export default function CardsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'My Cards' }} />
      <View className="flex-1 p-6">
        <FlatList
          data={mockCards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CreditCard
              brand={item.brand}
              bank={item.bank}
              owner={item.owner}
              last4={item.last4}
              expiryMonth={item.expiryMonth}
              expiryYear={item.expiryYear}
              colors={item.colors}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
