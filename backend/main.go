package main

import (
   "fmt"
   "net/http"
)

func main() {
   http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {fmt.Fprint(w, "Hello from Go backend!")})

   fmt.Println("Backend listening on :8080")
   http.ListenAndServe(":8080", nil)
}
