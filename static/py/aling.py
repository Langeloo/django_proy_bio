
sequence1 = Element("first-sequence")
sequence2 = Element("second-sequence")
global_button = Element('global_aling')
local_button = Element('local_aling')
slidermin1 = Element('lower')
slidermax1 = Element('upper')
slidermin2 = Element('lower2')
slidermax2 = Element('upper2')
alert_seq1 = Element('alert_seq1')
alert2_seq1 = Element('alert2_seq1')
alert_seq2 = Element('alert_seq2')
alert2_seq2 = Element('alert2_seq2')
table_head = Element('table_head')
table_body = Element('table_body')
table_footer = Element('table_footer')
table_head_local = Element('table_head_local')
table_body_local = Element('table_body_local')
table_footer_local = Element('table_footer_local')
local_data = Element("result_local")
global_data = Element("result_global")
global_similarity = Element("global_similarity")
local_similarity = Element("local_similarity")
len1_seq1 = Element('len1_seq1')
len1_seq2 = Element('len1_seq2')
len2_seq1 = Element('len2_seq1')
len2_seq2 = Element('len2_seq2')

        
def ver_text(sequence1, sequence2):
    #sequence1
    flagca_seq1 = False
    flagco_seq1 = False
    #sequence2
    flagca_seq2 = False
    flagco_seq2 = False
    
    for i in sequence1:
        if i not in "ACTG":
            flagca_seq1 = True
            
    for i in sequence2:
        if i not in "ACTG":
            flagca_seq2 = True
            
    if len(sequence1) < 1 or len(sequence1) > 60:
        flagco_seq1 = True
    
    if len(sequence2) < 1 or len(sequence2) > 60:
        flagco_seq2 = True
        
    if flagca_seq1:
        alert_seq1.write('Error: La secuencia solo debe tener caracteres ACTG')
    else:
        alert_seq1.write('OK')
        
    if flagco_seq1:
        alert2_seq1.write('Error: La secuencia debe tener entre 1 y 60 caracteres')
    else:
        alert2_seq1.write('OK')
        
    if flagca_seq2:
        alert_seq2.write('Error: La secuencia solo debe tener caracteres ACTG')
    else:
        alert_seq2.write('OK')
        
    if flagco_seq2:
        alert2_seq2.write('Error: La secuencia debe tener entre 1 y 60 caracteres')
    else:
        alert2_seq2.write('OK')
        
    #alerts
    if flagca_seq1 or flagco_seq1 or flagca_seq2 or flagco_seq2:
        local_button.element.disabled = True
        global_button.element.disabled = True
        slidermin1.element.disabled = True
        slidermin2.element.disabled = True
        slidermax1.element.disabled = True
        slidermax2.element.disabled = True
    else:
        local_button.element.disabled = False
        global_button.element.disabled = False
        slidermin1.element.disabled = False
        slidermin2.element.disabled = False
        slidermax1.element.disabled = False
        slidermax2.element.disabled = False
        slidermin1.element.max = len(sequence1)
        slidermax1.element.max = len(sequence1)
        slidermax1.element.value = len(sequence1)
        slidermin2.element.max = len(sequence2)
        slidermax2.element.max = len(sequence2)
        slidermax2.element.value = len(sequence2)
        
    
#input_event()
def input_event(evt=None):
    ver_text(sequence1.element.value.replace(" ", "").upper(), sequence2.element.value.replace(" ", "").upper())
    
sequence1.element.onkeypress = input_event
sequence2.element.onkeypress = input_event

#button global aling
def gl_aling(*args, **kws):
    result = []
    similarity = ""
    str_seq1 = sequence1.element.value.replace(" ", "").upper()
    str_seq2 = sequence2.element.value.replace(" ", "").upper()
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
def lc_aling(*args, **kws):
    similarity = ""
    result = []
    str_seq1 = sequence1.element.value.replace(" ", "").upper()[int(slidermin1.element.value) - 1 : int(slidermax1.element.value) - 1]
    str_seq2 = sequence2.element.value.replace(" ", "").upper()[int(slidermin2.element.value) - 1 : int(slidermax2.element.value) - 1]
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