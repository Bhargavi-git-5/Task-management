import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const taskCollection = collection(db, "tasks");

export const createTask = async (task: { title: string; category: string; dueDate: string }) => {
  await addDoc(taskCollection, task);
};

export const getTasks = async () => {
  const snapshot = await getDocs(taskCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateTask = async (id: string, updatedTask: object) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, updatedTask);
};

export const deleteTask = async (id: string) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};
