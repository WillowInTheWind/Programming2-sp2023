def create_desmos_stuff(Variablenum):
    print(f"p_{ {Variablenum} } = (15,0)")
    print(f"l_{ {Variablenum} } = (15,1)")
    print(f"m_{ {Variablenum} } = (15,2)")
    print(f"n_{ {Variablenum} } = (15,3)")
    print(f"a_{ {Variablenum} } = (1-t)p_{ {Variablenum} }+tl_{ {Variablenum} }")
    print(f"b_{ {Variablenum} } = (1-t)l_{ {Variablenum} }+tm_{ {Variablenum} }")
    print(f"c_{ {Variablenum} } = (1-t)m_{ {Variablenum} }+tn_{ {Variablenum} }")
    print(f"d_{ {Variablenum} } = (1-t)a_{ {Variablenum} }+tb_{ {Variablenum} }")
    print(f"e_{ {Variablenum} } = (1-t)b_{ {Variablenum} }+tc_{ {Variablenum} }")
    print(f"B_{ {Variablenum} } = (1-t)d_{ {Variablenum} }+te_{ {Variablenum} }")


create_desmos_stuff(int(input("Variable Num = ")))