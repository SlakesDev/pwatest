"use server";

import { cookieBasedClient } from "../utils/amplify-utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Schema } from "@/amplify/data/resource";

export async function createTodo(formData) {
  const { data } = await cookieBasedClient.models.Todo.create({
    content: formData.get("content")?.toString() || "",
  });
  console.log("create Todo data", data);
  redirect("/todos");
}

export async function updateTodo(content, id) {
  const { data } = await cookieBasedClient.models.Todo.update({
    id,
    content: content || "",
  });
  console.log("update todo data", data);
  redirect("/todos");
}

export async function onDeleteTodo(id) {
  const { data, errors } = await cookieBasedClient.models.Todo.delete({
    id,
  });

  console.log(id, data, errors);
  revalidatePath("/todos");
}
