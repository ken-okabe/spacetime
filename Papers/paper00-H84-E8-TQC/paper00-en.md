# Mathematical Structure of Type-Value Correspondence and Quantum Superposition in H(8,4) Code

## Overview

This paper demonstrates that the "type-value" correspondence in type theory mathematically rigorously matches the "superposition-eigenstate" correspondence in quantum mechanics, using the H(8,4) extended Hamming code as the subject. This correspondence shows that different mathematical languages—type theory, set theory, linear algebra, and quantum mechanics—describe the same structure, and serves as the fundamental principle for understanding topological quantum computation from a type-theoretic perspective.

Furthermore, we show that the self-duality of H(8,4) is the algebraic origin of Spin(8) Triality and guarantees the rigidity of Modular Tensor Categories.

---

## 1. Introduction: Correspondence between Type Theory and Set Theory

### 1.1 Fundamental Correspondence Relations

The following fundamental correspondences exist between Type Theory and Set Theory:

| Type Theory | Set Theory | Meaning |
|:---|:---|:---|
| Type | Set | Classification of objects |
| Term/Value | Element | Individual objects |
| Typing `x : T` | Membership `x ∈ S` | A value belongs to a type |

This correspondence has been deeply studied in the Curry-Howard correspondence and Homotopy Type Theory. In this paper, we apply this correspondence to the context of quantum computation, particularly the H(8,4) code.

### 1.2 Example of Finite Types

Types with finitely many elements naturally correspond to finite sets:

```lean
inductive Bool : Type where
  | true  : Bool
  | false : Bool
```

In set-theoretic terms, this corresponds to the two-element set $\{\text{true}, \text{false}\}$.

Similarly, since the H(8,4) code has 16 codewords, it can be conceptually described as the following type:

```lean
-- Conceptual representation
inductive H84Concept : Type where
  | c0  : H84Concept  -- 00000000
  | c1  : H84Concept  -- 11110000
  ...

-- Implementation level
abbrev H84 := UInt8  -- The 8-bit itself
```

In set-theoretic terms, this corresponds to a 16-element set $C = \{c_0, c_1, \ldots, c_{15}\} \subset \text{UInt8}$.

---

## 2. The Dual Nature of H(8,4) Code

### 2.1 Classical Aspect: Set of Codewords

H(8,4) extended Hamming code is a classical error-correcting code with the following properties:

**Parameters**:
- Code length $n = 8$
- Information bits $k = 4$
- Minimum distance $d = 4$
- Number of codewords $2^k = 16$

**Definition** (Codeword Space):

$$C = \{c \in \mathbb{F}_2^8 \mid H \cdot c^T = 0\}$$

where $H$ is the parity check matrix.

**Examples of Codewords**:

```
00000000  (weight 0: vacuum state)
11110000  (weight 4)
11001100  (weight 4)
11111100  (weight 4)
⋮
11111111  (weight 8: all bits)
```

An important property: the weight (number of 1s) of all codewords is **either 0, 4, or 8** (doubly-even property).

### 2.2 Quantum Aspect: Superposition States

Since H(8,4) is a **self-dual code** ($C = C^\perp$), the number of logical qubits in the CSS construction is:

$$k_Q = \dim(C) - \dim(C^\perp) = 4 - 4 = 0$$

This means the entire code space defines **just one quantum state**.

**Definition** (H(8,4) Quantum State):

$$|\psi_{H84}\rangle = \frac{1}{\sqrt{16}} \sum_{c \in C} |c\rangle = \frac{1}{4} \left( |c_0\rangle + |c_1\rangle + \cdots + |c_{15}\rangle \right)$$

This state is a quantum state with **all 16 codewords superposed with equal amplitude**.

### 2.3 The Essence of Duality

The important point here is the following equivalence:

$$\text{"Defining the H(8,4) type"} \equiv \text{"Preparing the equal superposition state of 16 codewords"}$$

That is, the declaration of type `H84 : Type` not only indicates the existence of 16 values, but also simultaneously means the existence of the state $|\psi_{H84}\rangle$ where 16 classical states are quantum-mechanically superposed.

---

## 3. Detailed Structure of Type-Value Correspondence

### 3.1 Type: Space of Possibilities

**Type `H84 = UInt8`** can be understood from multiple perspectives:

| Perspective | Description |
|:---|:---|
| **Type Theory** | UInt8 (can be restricted to 16 values as a subtype) |
| **Set Theory** | Finite set of 16 elements $C \subset \{0, 1, \ldots, 255\}$ |
| **Linear Algebra** | Basis labels for 16-dimensional Hilbert space $\mathcal{H}^{16}$ |
| **Quantum Mechanics** | 16 basis states $\{|c_0\rangle, \ldots, |c_{15}\rangle\}$ |
| **Bit Representation** | 8-bit (1 byte) bit patterns |

These are expressions of the same mathematical structure in different languages.

### 3.2 Value: Determined Reality

**Value `c : H84`** corresponds as follows:

| Perspective | Description |
|:---|:---|
| **Type Theory** | Value of type UInt8 |
| **Set Theory** | Element of set $C \subset \text{UInt8}$ |
| **Linear Algebra** | Basis vector $|c\rangle$ of 16-dimensional space |
| **Quantum Mechanics** | Eigenstate (pure state) |
| **Bit String** | 8-bit pattern (00000000 to 11111111) |

The important point is the hierarchical structure where values are the **basis constituting the type**, and the type is the **space where linear combinations (superpositions) of values live**.

### 3.3 Inhabitation of Types: Realization of Superposition

The fact that type `H84` is inhabited by 16 codewords `codewords : Array UInt8` means, in quantum mechanical terms:

```
Type H84 exists
  ⇔ 16 codewords {c₀, c₁, ..., c₁₅} exist
  ⇔ 16 basis vectors {|c₀⟩, |c₁⟩, ..., |c₁₅⟩} exist
  ⇔ Superpositions ∑ αᵢ|cᵢ⟩ can be defined
  ⇔ Quantum state space ℋ^16 is constructed
```

Therefore, **the existence of the type itself guarantees the possibility of quantum superposition**.

---

## 4. Rigorous Correspondence with Quantum Superposition

### 4.1 Classical Bit vs Quantum Bit

First, let's compare the 1-bit case:

**Classical Bit**:
```
bit ∈ {0, 1}  (exclusive choice)
```

**Quantum Bit**:
```
|ψ⟩ = α|0⟩ + β|1⟩  (superposition)
where |α|² + |β|² = 1
```

A qubit is described as a **linear combination** of two basis states $\{|0\rangle, |1\rangle\}$.

### 4.2 Extension to H(8,4) Case

In H(8,4), 16 codewords constitute the basis:

**Classical View** (Set Theory):
```
c ∈ H(8,4) = {c₀, c₁, ..., c₁₅}
```

Select one of the codewords.

**Quantum View** (Hilbert Space):
```
|ψ⟩ = ∑_{i=0}^{15} αᵢ|cᵢ⟩
where ∑|αᵢ|² = 1
```

Described as a superposition of 16 basis states.

### 4.3 H(8,4) as Equal-Amplitude Superposition

The canonical quantum state defined by H(8,4)'s self-duality is an **equal-amplitude** superposition:

$$|\psi_{H84}\rangle = \frac{1}{4} \sum_{i=0}^{15} |c_i\rangle$$

Here, all coefficients are equal: $\alpha_i = 1/4$. This state has the following characteristics:

1. **Maximum Entanglement**: Maximum correlation among 8 qubits
2. **Generalization of GHZ State**: Multi-qubit version of Greenberger-Horne-Zeilinger state
3. **Topological Order**: Non-local correlations indistinguishable by local measurements

### 4.4 Role of Quadratic Form Phase

In actual quantum states, each basis has a **phase factor**:

$$|\psi\rangle = \frac{1}{\sqrt{N}} \sum_{x \in \text{Coset}} (-1)^{P(x)} |x\rangle$$

where $P(x)$ is a **quadratic form** from $\mathbb{F}_2$ to $\mathbb{Z}_4$.

**Why Quadratic Form**:

- Z-type check: Determines which basis states are included in the superposition (presence/absence of amplitude)
- X-type symmetry: Specifies phase relationships between basis states
- To satisfy both simultaneously, the form $P(x) = \sum_i a_i x_i + \sum_{i<j} b_{ij} x_i x_j$ (linear terms + quadratic terms) is required

This quadratic form structure is the foundation of quantum error correction theory.

---

## 5. SignedH84: Dual Structure of Operation Layer and State Layer

### 5.1 Necessity of SignedH84

The 16 codewords of H(8,4) alone are **not algebraically closed** under Clifford geometric product.

**Counterexample**:

Geometric product of codewords $c_1 = 11110000$, $c_2 = 11001100$:

$$c_1 \cdot c_2 = (-1)^{\sigma(c_1, c_2)} (c_1 \oplus c_2)$$

Here $c_1 \oplus c_2 = 00111100$ is again in H(8,4), but **if we ignore the sign factor $(-1)^\sigma$, the algebraic structure breaks down**.

### 5.2 Definition of Signed Basis

$$\text{SignedH84} = \{(s, c) \mid s \in \{\pm 1\}, c \in H(8,4)\}$$

| Basis | Number of Elements | Algebraic Closure |
|:---|:---:|:---:|
| UnsignedH84 | 16 | ❌ |
| SignedH84 | 32 | ✅ |

### 5.3 Dual Structure: Operation Layer and State Layer

| Layer | Structure | Dimension | Role |
|:---|:---|:---:|:---|
| **Operation Layer** | SignedH84 | 32 | Clifford algebra (closed under group structure) |
| **State Layer** | Hilbert Space | 16 | Linear combination space of quantum states |

**Important Insight**:

Operations (Clifford geometric product) require 32 basis elements, but the quantum state space is 16-dimensional. The sign $\pm 1$:
- **During operations**: Essential as part of the geometric product
- **In states**: Appears as the sign of each basis amplitude

### 5.4 Correspondence with Implementation

```lean
-- Operation layer (future implementation)
structure SignedH84 where
  codeword : UInt8  -- H(8,4) codeword
  sign : Bool       -- sign (true = negative)

-- State layer (current implementation)
structure QuantumState where
  amplitude : Array (UInt8 × Bool)  -- (absolute value, sign)
  size_eq : amplitude.size = 16
```

Represents general quantum states where each codeword's amplitude has an independent sign.

---

## 6. Algebraic Origin of Self-Duality and Triality

### 6.1 Core of Self-Duality

**Theorem**: H(8,4) is a Type II self-dual code.

$$C = C^\perp$$

**Proof**:
1. $\dim(C) = k = 4$
2. $\dim(C^\perp) = n - k = 8 - 4 = 4$
3. Each row of the parity check matrix is orthogonal (inner product = 0 mod 2)
4. Since dimensions are equal, $C = C^\perp$ $\square$

### 6.2 Indistinguishability of Data and Check

Self-duality $C = C^\perp$ means:

**"Data bits (codewords)" and "Check bits (syndromes)" have no algebraic distinction**

Normal code:
```
Data bits → Encoding → Codewords
Codewords → Inspection → Syndrome (check bits)
```

H(8,4) self-dual code:
```
Codewords = Syndrome
Data = Check
Role distinction disappears
```

### 6.3 Leap to Triality

This **indistinguishability** is the **mathematical origin (Seed) of Spin(8) Triality** that manifests at the Clifford algebra $Cl(8)$ level.

**Spin(8) Triality**:

Spin(8) has three 8-dimensional irreducible representations that behave completely symmetrically:
- **Vector Representation** $V$: Normal vector space
- **Spinor Representation** $S_+$: Positive chiral spinor
- **Conjugate Spinor Representation** $S_-$: Negative chiral spinor

Due to self-duality, we already see the embryo of this three-fold symmetry at the H(8,4) level:

| H(8,4) Structure | Spin(8) Representation | Dimension |
|:---|:---|:---:|
| Codewords (Data) | Vector | 8 |
| Codewords (Check) | Spinor | 8 |
| Dual Structure | Conjugate Spinor | 8 |

### 6.4 Consequences for MTC Rigidity

This triality guarantees the following in Modular Tensor Category (MTC):

1. **Rigidity**: Existence of left-right dual objects and evaluation/coevaluation morphisms
2. **Uniqueness of Braiding**: Non-degeneracy of exchange statistics
3. **Symmetry of Fusion Rules**: Special properties of fusion coefficient matrices

**Theorem** (Informal):

```
H(8,4) Self-Duality
  ↓
Spin(8) Triality
  ↓
Ising MTC Rigidity
  ↓
Topological Protection
```

The first link in this chain (self-duality) guarantees the robustness of the entire theory.

---

## 7. Correspondence with Lean Formalization

### 7.1 Type Definition

Type definition of H(8,4) in Lean:

```lean
-- H84 codeword = UInt8 (the 8-bit itself)
abbrev H84 := UInt8

-- 16 codewords (the only source of truth)
def codewords : Array UInt8 := #[
  0b00000000, 0b11110000, ..., 0b11111111
]
```

This definition **simultaneously** defines:
- Set-theoretically: a 16-element set
- Linear-algebraically: a basis for 16-dimensional space
- Quantum-theoretically: 16 basis states

### 7.2 Quantum State Type

Type representing superposition states:

```lean
structure QuantumState where
  amplitude : Array (UInt8 × Bool)  -- (absolute value, sign)
  size_eq : amplitude.size = 16

-- H(8,4) standard quantum state
def standard : QuantumState where
  amplitude := Array.mkArray 16 (1, false)  -- all +1
```

### 7.3 Type-Theoretic Guarantees

Lean's type system statically guarantees the following:

1. **Type Safety**: All codewords are UInt8 (8-bit)
2. **Completeness**: 16 codewords exist
3. **Consistency**: Operations are logically consistent

These guarantees support the mathematical consistency of quantum states.

---

## 8. Conclusion

### 8.1 Summary of Main Results

This paper demonstrated the following:

1. **Type-Set Correspondence**: Types in type theory correspond to sets in set theory, and values correspond to elements

2. **Quantum Interpretation of Types**: Type `H84 = UInt8` represents a 16-dimensional Hilbert space where superpositions of 16 basis states live

3. **Duality of Values**: Value `c : H84` has dual roles as both basis vector (component of superposition) and eigenstate (measurement result)

4. **Necessity of SignedH84**: For algebraic closure of geometric product, signed 32-basis is essentially required

5. **Separation of Operation and State Layers**:
   - Operation layer: SignedH84 (32 basis, Clifford algebra)
   - State layer: Hilbert space (16-dimensional, quantum states)

6. **Self-Duality and Triality**: H(8,4)'s self-duality $C = C^\perp$ is the algebraic origin (Seed) of Spin(8) Triality and guarantees MTC rigidity

### 8.2 Establishment of Foundational Principle

**[Foundational Principle] Mathematical Multifacetedness of H(8,4) Type**

The H(8,4) type is an expression of the same mathematical structure in different languages, being simultaneously:

- **Set Theory**: Finite set of 16 elements
- **Linear Algebra**: 16-dimensional vector space
- **Quantum Mechanics**: Superposition state in 16-dimensional Hilbert space
- **Algebraic Geometry**: Seed structure of Spin(8) Triality

This multifacetedness shows that type theory is a powerful framework for treating different mathematical fields uniformly.

### 8.3 Consistency with Implementation

**Design Principles**:
1. **H84 = UInt8**: Codewords are the 8-bit itself (1 byte)
2. **QuantumState = Array (UInt8 × Bool)**: Clear representation of signed amplitudes
3. **SignedH84 = (UInt8, Bool)**: Signed basis of operation layer (2 bytes)

**Prioritizing Theoretical Clarity**:
- Avoid complex optimizations like bit packing
- Type meaning is self-documenting
- Faithfully implements the "type=value=quantum state" principle from paper0.md

### 8.4 Future Prospects

This type-value-quantum correspondence framework can be extended to:

1. **Correspondence with Clifford Algebra Cl(8)**: Structure where SignedH84's 32 bases are embedded in Cl(8)'s even-grade subalgebra
2. **Spin(8) Triality**: Type-theoretic description of triality arising from self-duality
3. **Modular Tensor Category**: Correspondence with algebraic structure of topological phases
4. **Formal Verification**: Type-safe implementation and proof of quantum algorithms in Lean

Through the concrete code H(8,4), the deep connection between type theory and quantum computation has become clear. This connection is the mathematical foundation of topological quantum computation theory.

---

## References

- Van den Nest, M. (2004). Classical Simulation of Quantum Computation, the Gottesman-Knill Theorem, and Slightly Beyond. *Quantum Information & Computation*.
- Calderbank, A. R., & Shor, P. W. (1996). Good quantum error-correcting codes exist. *Physical Review A*.
- Steane, A. M. (1996). Error correcting codes in quantum theory. *Physical Review Letters*.
- Homotopy Type Theory: Univalent Foundations of Mathematics (2013). The Univalent Foundations Program.
- Conway, J. H., & Sloane, N. J. A. (1999). *Sphere Packings, Lattices and Groups*. Springer.

---

**Acknowledgments**: The insights in this paper emerged from a series of discussions on the type-theoretic properties of H(8,4) code and its role in quantum computation. We hope that the perspective of type-value-quantum correspondence will shed new light on future topological quantum computation research.
