sequence1 = Element("seq_fasta1")
sequence2 = Element("seq_fasta2")
global_button = Element('global_aling_fasta')
local_button = Element('local_aling_fasta')
alert_seq1 = Element('alert_seq1fasta')
alert2_seq1 = Element('alert2_seq1fasta')
alert_seq2 = Element('alert_seq2fasta')
alert2_seq2 = Element('alert2_seq2fasta')
slidermin1 = Element('lower_fasta1')
slidermax1 = Element('upper_fasta1')
slidermin2 = Element('lower_fasta2')
slidermax2 = Element('upper_fasta2')
table_head = Element('table_headfasta')
table_body = Element('table_bodyfasta')
table_footer = Element('table_footerfasta')
table_head_local = Element('table_head_localfasta')
table_body_local = Element('table_body_localfasta')
table_footer_local = Element('table_footer_localfasta')
local_data = Element("result_localfasta")
global_data = Element("result_globalfasta")
global_similarity = Element("global_similarityfasta")
local_similarity = Element("local_similarityfasta")
len1_seq1 = Element('len1_seq1fasta')
len1_seq2 = Element('len1_seq2fasta')
len2_seq1 = Element('len2_seq1fasta')
len2_seq2 = Element('len2_seq2fasta')

#button global aling
def gl_aling_fasta(*args, **kws):
    print("global: " + str(sequence1.element.value))
    result = []
    similarity = ""
    str_seq1 = sequence1.element.value.replace(" ", "").upper()
    str_seq2 = sequence2.element.value.replace(" ", "").upper()
    if str_seq1 == 'SINDATOS' or str_seq2 == 'SINDATOS':
        global_button.element.disabled = True
        local_button.element.disabled = True
        return
    str_table_head = ""
    str_table_body = ""
    str_table_footer = ""
    equal = True if len(str_seq1) == len(str_seq2) else False
    seq_zip = zip(str_seq1, str_seq2)
    for i,  j in seq_zip:
        if i != j:
            result.append(False)
        else:
            result.append(True)
            
        str_table_head += "<th>" + i + "</th>"
        str_table_footer += "<th>" + j + "</th>"
    for i in result:
        if i:
            str_table_body += "<td class='bg-success'>" + "1" + "</td>"
        else:
            str_table_body += "<td class='bg-danger'>" + "0" + "</td>"
            
    if equal:
        similarity = (
            "La similitud es: "
            + str((result.count(True) / max(len(str_seq1),len(str_seq2))) * 100)
            + "%"
        )
    else:
        similarity = "No es posible hallar el porcentaje de similitud, cadenas de diferente longitud"

    table_head.write(str_table_head)
    table_body.write(str_table_body)
    table_footer.write(str_table_footer)
    global_similarity.write(similarity)
    len1_seq1.write("Longitud sequencia 1: " + str(len(str_seq1)))
    len1_seq2.write("Longitud sequencia 2: " + str(len(str_seq2)))
    
    
#button local aling
def lc_aling_fasta(*args, **kws):
    similarity = ""
    result = []
    str_seq1 = sequence1.element.value.replace(" ", "").upper()[int(slidermin1.element.value) - 1 : int(slidermax1.element.value) - 1]
    str_seq2 = sequence2.element.value.replace(" ", "").upper()[int(slidermin2.element.value) - 1 : int(slidermax2.element.value) - 1]
    if str_seq1 == 'SINDATOS' or str_seq2 == 'SINDATOS':
        global_button.element.disabled = True
        local_button.element.disabled = True
        return
    str_table_head = ""
    str_table_body = ""
    str_table_footer = ""
    equal = True if len(str_seq1) == len(str_seq2) else False
    seq_zip = zip(str_seq1, str_seq2)
    for i,  j in seq_zip:
        if i != j:
            result.append(False)
        else:
            result.append(True)
            
        str_table_head += "<th>" + i + "</th>"
        str_table_footer += "<th>" + j + "</th>"
    for i in result:
        if i:
            str_table_body += "<td class='bg-success'>" + "1" + "</td>"
        else:
            str_table_body += "<td class='bg-danger'>" + "0" + "</td>"
            
    if equal:
        similarity = (
            "La similitud es: "
            + str((result.count(True) / max(len(str_seq1),len(str_seq2))) * 100)
            + "%"
        )
    else:
        similarity = "No es posible hallar el porcentaje de similitud, cadenas de diferente longitud"

    table_head_local.write(str_table_head)
    table_body_local.write(str_table_body)
    table_footer_local.write(str_table_footer)
    local_similarity.write(similarity)
    len2_seq1.write("Longitud sequencia 1: " + str(len(str_seq1)))
    len2_seq2.write("Longitud sequencia 2: " + str(len(str_seq2)))