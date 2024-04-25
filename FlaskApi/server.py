from flask import Flask, request, jsonify
from transformers import T5Tokenizer, T5ForConditionalGeneration

app = Flask(__name__)

# Load the model and tokenizer
tokenizer = T5Tokenizer.from_pretrained("madushakv/t5_xsum_samsum_billsum_cnn_dailymail")
model = T5ForConditionalGeneration.from_pretrained("madushakv/t5_xsum_samsum_billsum_cnn_dailymail")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json(force=True)
    text = data['text']
    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=1024, truncation=True)
    outputs = model.generate(inputs, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)

# Save the model and tokenizer
tokenizer.save_pretrained("tokenizer")
model.save_pretrained("model")
