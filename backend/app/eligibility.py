def evaluate_rule(family, rule):
    attribute = rule.attribute
    expected = rule.value

    if attribute == "income":
        actual = family.income
        expected = float(expected)
    elif attribute == "district":
        actual = family.district
    elif attribute == "member_age_min":
        actual = max((m.age for m in family.members), default=0)
        expected = float(expected)
    elif attribute == "has_occupation":
        actual = any(m.occupation.lower() == expected.lower() for m in family.members)
        expected = True
    else:
        return False

    if rule.operator == "<":
        return actual < expected
    if rule.operator == "<=":
        return actual <= expected
    if rule.operator == ">":
        return actual > expected
    if rule.operator == ">=":
        return actual >= expected
    if rule.operator == "==":
        return actual == expected
    return False

def is_eligible(family, scheme):
    if not scheme.rules:
        return True
    return all(evaluate_rule(family, rule) for rule in scheme.rules)
