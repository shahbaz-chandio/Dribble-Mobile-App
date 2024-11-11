import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const FaqScreen = () => {
  
  const faqs = [
    { id: '1', question: 'What causes rabies in animals?', answer: 'Rabies is caused by a virus and is transmitted through bites or saliva.' },
    { id: '2', question: 'How can I prevent my dog from getting parvovirus?', answer: 'Vaccination is the best prevention against parvovirus in dogs.' },
    { id: '3', question: 'What are symptoms of feline leukemia?', answer: 'Symptoms include loss of appetite, pale gums, and persistent infections.' },
    { id: '4', question: 'Why do dogs get heartworms?', answer: 'Heartworms are transmitted by mosquitoes carrying the parasite larvae.' },
    { id: '5', question: 'Can animals get the flu?', answer: 'Yes, some animals like dogs and cats can contract strains of the flu.' },
    { id: '6', question: 'What is kennel cough in dogs?', answer: 'Kennel cough is a respiratory infection caused by a combination of bacteria and viruses.' },
    { id: '7', question: 'How can I prevent tick-borne diseases in pets?', answer: 'Using tick preventatives and checking for ticks can help prevent infections.' },
    { id: '8', question: 'What are common digestive issues in pets?', answer: 'Common issues include vomiting, diarrhea, and loss of appetite.' },
  ];

  
  const [expandedId, setExpandedId] = useState(null);

  
  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  
  const renderFaqItem = ({ item }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={() => toggleAnswer(item.id)} style={styles.questionContainer}>
        <Text style={styles.question}>{item.question}</Text>
      </TouchableOpacity>
      {expandedId === item.id && <Text style={styles.answer}>{item.answer}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
    
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={renderFaqItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  list: { paddingBottom: 20 },
  faqItem: { marginBottom: 15, backgroundColor: '#ffffff', borderRadius: 8, padding: 15, elevation: 3 },
  questionContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  question: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  answer: { marginTop: 10, fontSize: 14, color: '#555' },
});

export default FaqScreen;
